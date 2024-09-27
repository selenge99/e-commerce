import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

// interface IMyRequest extends Request {
//   user: string | object;
// }

declare global {
  namespace Express {
    interface Request {
      user: string | any;
    }
  }
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ message: "Энэ үйдлийг хийхийн тулд нэвтэрнэ үү." });
  }

  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, "JWT_TOKEN_PASS@123");
  req.user = user;
  next();
};
