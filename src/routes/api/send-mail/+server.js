// @ts-nocheck
export const prerender = true;
import nodemailer from "nodemailer";
import { SMTP_EMAIL, SMTP_EMAIL_PASSWORD } from "$env/static/private";

let transporter = nodemailer.createTransport({
  host: "smtp.strato.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_EMAIL_PASSWORD,
  },
});


export default transporter;
// export default transporter;

export async function POST({ request }) {
  const data = await request.json();
    
  try {
    await transporter.sendMail({
      to: SMTP_EMAIL,
                bcc: email,
                subject: subject,
                email: email,
                telephone: telephone,
                name: name,
                text: html,
    });
    return new Response(JSON.stringify({ success: true }), { 
        headers: { "Content-Type": "application/json" },
        status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}




