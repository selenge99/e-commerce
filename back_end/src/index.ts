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
import { sendEmail } from "./utils/send-email";

const PORT: string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

const app = express();
// const resend = new Resend(process.env.RESEND_API_KEYS);
app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1", categoryRoute);
app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);

app.get("/", async (req: Request, res: Response) => {
  const rndOtp = Math.floor(Math.random() * 10_000)
    .toString()
    .padStart(4, "0");
  sendEmail("pineconeselenge@gmail.com", rndOtp);
  res.send("Welcome E-commerce API server");
});
connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server works:${PORT}`);
});
