import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

import authRoute from "./routes/auth-route";

const PORT = process.env.PORT;
const app = express();

app.use("/api/v1/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome E-commerce API server");
});

app.listen(PORT, () => {
  console.log(`Server works:${PORT}`);
});
