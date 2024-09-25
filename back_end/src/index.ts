import { Resend } from "resend";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";

dotenv.config();

import authRoute from "./routes/auth-route";
import categoryRoute from "./routes/category-route";
import productRoute from "./routes/product-route";
import userRoute from "./routes/user-route";
import { connectDB } from "./config/db";
import { genarateHtmlTemplate } from "./utils/generateHtmlTemplate";

const PORT: string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

const app = express();
const resend = new Resend(process.env.RESEND_API_KEYS);
app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1", categoryRoute);
app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.get("/", async (req: Request, res: Response) => {
  // const rndOtp = Math.floor(Math.random() * 10000)
  //   .toString()
  //   .padStart(4, "0");
  // const { data, error } = await resend.emails.send({
  //   from: "Acme <onboarding@resend.dev>",
  //   to: ["master.coder.ever@gmail.com"],
  //   subject: "hello world",
  //   html: genarateHtmlTemplate(rndOtp),
  // });
  // if (error) {
  //   console.error("EMAIL_ERROR", { error });
  // }
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "selenge1618@gmail.com",
      pass: "jn7jnAPss4f63QBp6D",
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  res.send("Welcome E-commerce API server");
});
connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server works:${PORT}`);
});
