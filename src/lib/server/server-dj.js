

// /** @type {import('@sveltejs/adapter-vercel').Config} */
// export const config = {
// 	runtime: 'edge',
// };
 import nodemailer from "nodemailer";
import { PRIVATE_DJ_SMTP_EMAIL, PRIVATE_DJ_SMTP_EMAIL_PASSWORD } from "$env/static/private";

// const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  host: "smtp.strato.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: PRIVATE_DJ_SMTP_EMAIL,
    pass: PRIVATE_DJ_SMTP_EMAIL_PASSWORD,
  },
});

export default transporter;



export async function POST({ request }) {
  const { email, subject, telephone, name, html } = await request.json();

  try {
    await transporter.sendMail({
      to: PRIVATE_DJ_SMTP_EMAIL,
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
    // @ts-ignore
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}




