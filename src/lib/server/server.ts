// /** @type {import('@sveltejs/adapter-vercel').Config} */
// export const config = {
// 	runtime: 'edge'
// };
import nodemailer from 'nodemailer';

const VITE_SMTP_EMAIL = import.meta.env.VITE_SMTP_EMAIL as string;
const VITE_SMTP_EMAIL_PASSWORD = import.meta.env.VITE_SMTP_EMAIL_PASSWORD as string;

const transporter = nodemailer.createTransport({
	host: 'smtp.strato.com',
	port: 465,
	secure: true, // use TLS
	auth: {
		user: VITE_SMTP_EMAIL,
		pass: VITE_SMTP_EMAIL_PASSWORD
	}
});

export default transporter;

interface EmailRequest {
	email: string;
	subject: string;
	telephone: string;
	name: string;
	html: string;
}

export async function POST({ request }: { request: Request }) {
	const { email, subject, telephone, name, html } = await request.json() as EmailRequest;
	
	try {
		await transporter.sendMail({
			to: VITE_SMTP_EMAIL,
			bcc: email,
			subject: subject,
			html: html,
			text: `Name: ${name}\nEmail: ${email}\nTelephone: ${telephone}\n\n${html}`
		});
		
		return new Response(JSON.stringify({ success: true }), {
			headers: { 'Content-Type': 'application/json' },
			status: 200
		});
	} catch (error: unknown) {
		const errorMessage = error instanceof Error ? error.message : 'Unknown error';
		return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
	}
}
