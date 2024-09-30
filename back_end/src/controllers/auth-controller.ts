import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateToken } from "../utils/jwt";
import { sendEmail } from "../utils/send-email";
import crypto from "crypto";

export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, email, password } = req.body;

    if (!firstname || !email || !password) {
      return res.status(400).json({ message: "Hooson utga baij bolohgui" });
    }

    const createdUser = await User.create({
      firstname,
      email,
      password,
    });
    res
      .status(201)
      .json({ message: " create user is successfull", user: createdUser });
  } catch (error) {
    // export const login = (req: Request, res: Response) => {
    //   res.status(200).json({ message: "login success" });
    // };
    res.status(500).json({ message: "Aldaa" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log("emai", email);
    const user = await User.findOne({ email });
    console.log("user", user);
    if (!user) {
      return res
        .status(404)
        .json({ message: "Burtgeltei hereglegch oldsongui" });
    } else {
      const isCheck = bcrypt.compareSync(password, user.password.toString());
      console.log("isCheck", isCheck);
      if (!isCheck) {
        res
          .status(404)
          .json({ message: "Hereglegchiin password tohirohgui baina" });
      } else {
        const token = generateToken({ id: user._id });
        res.status(200).json({ message: "Sucess", token });
      }
    }
  } catch (error) {
    console.error(res.status(500).json({ message: "Aldaa" }));
  }
};

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      return res
        .status(404)
        .json({ message: "Burtgeltei hereglegch oldsongui" });
    }
    const otp = Math.floor(Math.random() * 10_000)
      .toString()
      .padStart(4, "0");
    findUser.otp = otp;
    await findUser.save();
    await sendEmail(email, otp);
    res.status(200).json({ message: "OTP code email is sent successfully" });
  } catch (error) {}
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otpValue } = req.body;
  const findUser = await User.findOne({ email: email, otp: otpValue });
  if (!findUser) {
    return res
      .status(400)
      .json({ message: "Burtgeltei hereglegch esvel otp kod buruu bn" });
  }
  // sendEmail
  const resetToken = crypto.randomBytes(25).toString("hex");
  const hashedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  findUser.passwordResetToken = hashedResetToken;
  findUser.passwordResetTokenExpire = new Date(Date.now() + 10 * 60 * 1000);
  await findUser.save();

  await sendEmail(
    email,
    `<a href="http://localhost3000/forgetPassword/newpass?resettoken="${resetToken}"> Nuuts ug sergeeh holboos</a>`
  );
  res.status(200).json({ message: "nuuts ug sergeeh email ilgeelee" });
};

export const verifyPassword = async (req: Request, res: Response) => {
  const { password, resetToken } = req.body;

  const hashedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const findUser = await User.findOne({
    passwordResetToken: hashedResetToken,
    passwordResetTokenExpire: { $gt: Date.now },
  });
  if (!findUser) {
    return res
      .status(400)
      .json({ mesaage: "Tanii nuuts ug sergeeh hugatsaa duussan bn" });
  }
  findUser.password = password;
  await findUser.save();
  res.status(200).json({ message: "Nuuts ug amjilttai sergeelee " });
};
