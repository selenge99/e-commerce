import { Request, Response } from "express";
import User from "../../modals/user.modal";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: "Hooson utga baij bolohgui" });
    }

    const createdUser = await User.create({
      name,
      email,
      password,
      phoneNumber: "",
    });
    res.status(201).json({ message: "Success", user: createdUser });
  } catch (error) {
    // export const login = (req: Request, res: Response) => {
    //   res.status(200).json({ message: "login success" });
    // };
    res.status(500).json({ message: "Aldaa" });
  }
};
