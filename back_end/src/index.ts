import { Resend } from 'resend';
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors"


dotenv.config();

import authRoute from "./routes/auth-route";
import { connectDB } from "./config/db";
import { genarateHtmlTemplate } from './utils/generateHtmlTemplate';

const PORT: string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

const app = express();
const resend = new Resend(process.env.RESEND_API_KEYS);
app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRoute);

app.get("/",async (req: Request, res: Response) => {

const rndOtp = Math.floor(Math.random() * 10000).toString().padStart(4,"0");
 const {data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['master.coder.ever@gmail.com'],
    subject: 'hello world',
    html: genarateHtmlTemplate(rndOtp),
  });
  if (error){
    console.error("EMAIL_ERROR", {error});
  }
  res.send("Welcome E-commerce API server");
});
connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server works:${PORT}`);
});
