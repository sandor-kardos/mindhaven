import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ---------------------------------------------------------------------------
// Spam protection for the enquiry form
// - honeypot field ("website") that real visitors never see or fill
// - minimum fill time (bots submit instantly)
// - per-IP rate limit (in memory, per server instance)
// - same-origin check
// - length limits and HTML escaping, so nothing a visitor types can inject
//   links or markup into the email Erika receives
// ---------------------------------------------------------------------------

const RECIPIENT = process.env.CONTACT_TO || ["mindhavenuk", "gmail.com"].join("@");
const ALLOWED_ORIGINS = ["https://mindhaven.uk", "https://www.mindhaven.uk"];
const MIN_FILL_MS = 3000;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_MAX = 5;
const LIMITS = { name: 100, contactMethod: 30, contactDetail: 120, objective: 40, message: 3000 };
const OBJECTIVES = ["burnout", "anxiety", "career", "other"];
const METHODS = ["Email", "WhatsApp", "Messenger"];

const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // keep memory bounded
  return recent.length > RATE_MAX;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clean(value: unknown, max: number): string {
  return String(value ?? "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
}

// Pretend success to bots so they don't retry or adapt
const silentOk = () => NextResponse.json({ ok: true });

export async function POST(request: Request) {
  const origin = request.headers.get("origin") || "";
  const isLocal = origin.startsWith("http://localhost") || origin.startsWith("http://127.0.0.1");
  if (origin && !ALLOWED_ORIGINS.includes(origin) && !isLocal) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try WhatsApp or call instead." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled, or form submitted faster than a human could: drop quietly
  if (clean(body.website, 200)) return silentOk();
  const startedAt = Number(body.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) return silentOk();

  const name = clean(body.name, LIMITS.name);
  const contactMethod = METHODS.includes(String(body.contactMethod)) ? String(body.contactMethod) : "Email";
  const contactDetail = clean(body.contactDetail || body.email, LIMITS.contactDetail);
  const objective = OBJECTIVES.includes(String(body.objective)) ? String(body.objective) : "";
  const message = clean(body.message, LIMITS.message);

  if (!name || !contactDetail || !objective) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Link-stuffed messages are almost always spam
  const linkCount = (message.match(/https?:\/\/|www\./gi) || []).length;
  if (linkCount > 2) return silentOk();

  // If the visitor left an email address, replies go straight to them
  const replyTo = /^[^\s@<>"]+@[^\s@<>"]+\.[a-z]{2,}$/i.test(contactDetail) ? contactDetail : undefined;

  const e = escapeHtml;
  const subject = `New enquiry from ${name.replace(/[\r\n]+/g, " ")}`;
  const html = `
    <div style="font-family: sans-serif; color: #0D2E24; padding: 20px; border: 1px solid #34D399;">
      <h2 style="color: #0D2E24;">New Client Enquiry</h2>
      <p><strong>Name:</strong> ${e(name)}</p>
      <p><strong>Preferred Contact Method:</strong> ${e(contactMethod)}</p>
      <p><strong>Contact Details (Email / Phone):</strong> ${e(contactDetail)}</p>
      <p><strong>Primary Focus:</strong> ${e(objective)}</p>
      <p><strong>Message / Notes:</strong><br>${message ? e(message).replace(/\n/g, "<br>") : "No additional message provided."}</p>
    </div>
  `;
  const text = [
    `Name: ${name}`,
    `Preferred contact: ${contactMethod}`,
    `Contact details: ${contactDetail}`,
    `Primary focus: ${objective}`,
    "",
    message || "No additional message provided.",
  ].join("\n");

  const resendApiKey = process.env.RESEND_API_KEY;
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  try {
    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendApiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM || "Mindhaven <onboarding@resend.dev>",
          to: [RECIPIENT],
          subject,
          html,
          text,
          ...(replyTo ? { reply_to: replyTo } : {}),
        }),
      });
      if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
    } else if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({ service: "gmail", auth: { user: gmailUser, pass: gmailPass } });
      await transporter.sendMail({ from: `"Mindhaven Contact" <${gmailUser}>`, to: RECIPIENT, subject, html, text, replyTo });
    } else {
      console.log("Local dev enquiry (not emailed):", { name, contactMethod, objective });
    }
  } catch (err) {
    // Report the failure, so the visitor is told to use WhatsApp instead of
    // believing a message arrived that never did
    console.error("Contact API send failed:", err);
    return NextResponse.json({ error: "Could not send. Please message on WhatsApp or call." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, message: "Enquiry received successfully." });
}
