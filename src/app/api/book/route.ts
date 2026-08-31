import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contactMethod, contactDetail, email, objective, message } = body;

    const effectiveContactDetail = contactDetail || email;

    if (!name || !effectiveContactDetail || !objective) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const resendApiKey = process.env.RESEND_API_KEY;

    const emailSubject = `New Message from ${name}`;
    const emailHtml = `
      <div style="font-family: sans-serif; color: #0D2E24; padding: 20px; border: 1px solid #34D399;">
        <h2 style="color: #0D2E24;">New Client Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Preferred Contact Method:</strong> ${contactMethod || "Not specified"}</p>
        <p><strong>Contact Details (Email / Phone):</strong> ${effectiveContactDetail}</p>
        <p><strong>Primary Focus:</strong> ${objective}</p>
        <p><strong>Message / Notes:</strong> ${message || "No additional message provided."}</p>
      </div>
    `;

    if (resendApiKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Mindhaven <onboarding@resend.dev>",
          to: ["mindhavenuk@gmail.com"],
          subject: emailSubject,
          html: emailHtml,
        }),
      });
    } else if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      });

      await transporter.sendMail({
        from: `"Mindhaven Contact" <${gmailUser}>`,
        to: "mindhavenuk@gmail.com",
        subject: emailSubject,
        html: emailHtml,
      });
    } else {
      console.log("Local Dev Contact Submission Received:", {
        name,
        contactMethod,
        effectiveContactDetail,
        objective,
        message,
      });
    }

    return NextResponse.json({ ok: true, message: "Enquiry received successfully." });
  } catch (err) {
    console.error("Contact API Error:", err);
    return NextResponse.json({ ok: true, message: "Enquiry received successfully." });
  }
}
