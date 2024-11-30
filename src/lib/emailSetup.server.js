/* eslint-disable no-unused-vars */
import nodemailer from "nodemailer";
import { STRATO_EMAIL, STRATO_EMAIL_PASSWORD } from "$env/static/private";

let transporter = nodemailer.createTransport({
  pool: true,
  host: "smtp.strato.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: STRATO_EMAIL,
    pass: STRATO_EMAIL_PASSWORD,
  },
});


transporter.verify(function (error, success) {
  if (error) {
    console.error(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

export default transporter;