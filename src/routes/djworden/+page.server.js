/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: 'nodejs20.x'
};

import { PRIVATE_SMTP_EMAIL } from "$env/static/private";
import transporter from "$lib/server/server.js";

export const actions = {
    // @ts-ignore
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const email = formData.get("email");
            const name = formData.get("name");
            const telephone = formData.get("telephone");
            const subject = formData.get("subject");
            const body = formData.get("body");
            console.log(body);
            console.log(name);
            let html = `<h2>Welkom bij Radio Red Arrow</h2>
            <p>Wij proberen u zo snel mogelijk te helpen, hier onder vind u uw bericht ter bevestiging.</p>
            <label>Email:</label>
            <pre>${email}</pre>
            <label>Naam:</label>
            <pre>${name}</pre>
            <label>Telefoon:</label>
            <pre>${telephone}</pre>
            <label>Onderwerp:</label>
            <pre>${subject}</pre>
            <label>Motivatie:</label>
            <pre>${body}</pre>
            <p>Met Vriendelijke groet</p>
            <p>Team Radio Red Arrow</p>`;

            const message = {
                to: PRIVATE_SMTP_EMAIL,
                bcc: email,
                subject: subject,
                email: email,
                telephone: telephone,
                name: name,
                text: body,
                html: html,
            };

            // @ts-ignore
            const sendEmail = async (message) => {
                await new Promise((resolve, reject) => {
                    // @ts-ignore
                    transporter.sendMail(message, (err, info) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(info);
                        }
                    });
                });
            };

            await sendEmail(message);

            return {
                success: "Email is sent",
            };
        } catch (error) {
            console.error(error);
        }
    }
};

