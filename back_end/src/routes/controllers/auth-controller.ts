import { Request, Response } from "express";
import User from "../../modals/user.modal";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, email, password } = req.body;

    if (!firstname || !email || !password) {
      return res.status(400).json({ message: "Hooson utga baij bolohgui" });
    }

    const createdUser = await User.create({
      firstname,
      email,
      password
     
    });
    res.status(201).json({ message: " create user is successfull", user:createdUser});
  } catch (error) {
    // export const login = (req: Request, res: Response) => {
    //   res.status(200).json({ message: "login success" });
    // };
    res.status(500).json({ message: "Aldaa" });
  }
};

export const login = async (req:Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({email})
    if (!user) {
      return res.status(404).json({ message: "Burtgeltei hereglegch oldsongui" });
    } else {
      const isCheck = bcrypt.compareSync(password, user.password.toString());
      if (isCheck){
        res.status(404).json({message: "Hereglegchiin password tohirohgui baina"})
      } else {
        const token = jwt.sign({id:user._id}, "USER_TOKEN_PASS@369",{
          expiresIn:"1h"
        })
        res.status(200).json({message:"Sucess",token});
      }
    }
    
  } catch (error) {
    console.error(
      res.status(500).json({message: "Aldaa"})
    )
  }
}
