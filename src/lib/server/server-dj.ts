import nodemailer from "nodemailer";
import type { TransportOptions } from "nodemailer";
// import { PRIVATE_DJ_SMTP_EMAIL, PRIVATE_DJ_SMTP_EMAIL_PASSWORD } from "$env/static/private";

const VITE_DJ_SMTP_EMAIL = import.meta.env.VITE_DJ_SMTP_EMAIL as string;
const VITE_DJ_SMTP_EMAIL_PASSWORD = import.meta.env.VITE_DJ_SMTP_EMAIL_PASSWORD as string;

const transporter = nodemailer.createTransport({
  host: "smtp.strato.com",
  port: 465,
  secure: true,
  auth: {
    user: VITE_DJ_SMTP_EMAIL,
    pass: VITE_DJ_SMTP_EMAIL_PASSWORD,
  },
});

export default transporter;

interface EmailData {
  email: string;
  subject: string;
  telephone: string;
  name: string;
  html: string;
}

export async function POST({ request }: { request: Request }) {
  const { email, subject, telephone, name, html } = await request.json() as EmailData;

  try {
    await transporter.sendMail({
      to: VITE_DJ_SMTP_EMAIL,
      bcc: email,
      subject: subject,
      html: `
        <p>From: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${telephone}</p>
        <div>${html}</div>
      `,
    });
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200 
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
