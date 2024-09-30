import nodemailer from "nodemailer";
import { genarateHtmlTemplate } from "./generateHtmlTemplate";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: true,
  port: 465,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export const sendEmail = async (email: string, otp: string): Promise<void> => {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM_USER,
    to: email,
    subject: "Hello World",
    html: genarateHtmlTemplate(otp),
  });
};
