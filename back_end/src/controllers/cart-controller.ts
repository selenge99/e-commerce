import { Request, Response } from "express";
import Cart from "../models/cart.model";

export const createCart = async (req: Request, res: Response) => {
  const { userId, productId } = req.body;
  try {
    const carts = await Cart.create({ user: userId, product: productId });
    res.status(200).json({ message: "All cart is read success", carts });
  } catch (error) {
    res.status(400).json({ message: "failed to read carts" });
  }
};
