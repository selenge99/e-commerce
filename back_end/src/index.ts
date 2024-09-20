import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

import authRoute from "./routes/auth-route";
import { connectDB } from "./config/db";

const PORT: string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

const app = express();

app.use(express.json());
app.use("/api/v1/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome E-commerce API server");
});
connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server works:${PORT}`);
});
