import User from "../models/user.model";
import { Request, Response } from "express";

export const getAlluser = async (req: Request, res: Response) => {
  const users = await User.find({});
  res.status(201).json({ message: "All Users data", users: users });
};

const getCurrentUser = async (req: Request, res: Response) => {
  console.log(req);
  //   const user = await User.findById();
  //   res.status(201).json({ message: "Current User", user: user });
};
