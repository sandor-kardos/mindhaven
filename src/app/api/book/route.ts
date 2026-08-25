import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, objective } = await request.json();

    if (!name || !email || !objective) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const resendApiKey = process.env.RESEND_API_KEY;

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
          subject: `New Booking Enquiry from ${name}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Primary Objective:</strong> ${objective}</p>`,
        }),
      });
    } else if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      });

      await transporter.sendMail({
        from: `"Mindhaven Booking" <${gmailUser}>`,
        to: "mindhavenuk@gmail.com",
        subject: `New Booking Enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPrimary Objective: ${objective}`,
      });
    } else {
      console.log("Local Dev Booking Submission Received:", { name, email, objective });
    }

    return NextResponse.json({ ok: true, message: "Enquiry received successfully." });
  } catch (err) {
    console.error("Booking API Error:", err);
    // Return graceful success so the user can unlock calendar scheduling without getting blocked
    return NextResponse.json({ ok: true, fallback: true });
  }
}
