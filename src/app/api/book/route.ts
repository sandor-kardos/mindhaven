import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, objective } = await request.json();

  if (!name || !email || !objective) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Mindhaven Booking" <${process.env.GMAIL_USER}>`,
    to: "mindhavenuk@gmail.com",
    subject: `New Booking Enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPrimary Objective: ${objective}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Primary Objective:</strong> ${objective}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
