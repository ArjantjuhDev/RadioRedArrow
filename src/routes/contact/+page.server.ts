import { VITE_SMTP_EMAIL } from "$env/static/private";
import transporter from "$lib/server/server.js";

export const actions = {
    // @ts-nocheck
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const email = formData.get("email");
            const body = formData.get("body");
            console.log(body);
            let html = `<h2>Welkom bij Radio Red Arrow</h2>
            <p>Wij proberen u zo snel mogelijk te helpen, hier onder vind u uw bericht ter bevestiging.</p>
            <label>Email:</label>
            <pre>${email}</pre>
            <label>Vraag:</label>
            <pre>${body}</pre>
            <p>Met Vriendelijke groet</p>
            <p>Team Radio Red Arrow</p>`;

            const message = {
                to: VITE_SMTP_EMAIL,
                bcc: email,
                email: email,
                text: body,
                html: html,
            };
            
            const sendEmail = async (message: any) => {
                await new Promise((resolve, reject) => {
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

