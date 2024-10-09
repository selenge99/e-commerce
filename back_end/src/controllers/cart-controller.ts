import { Request, Response } from "express";
import Cart from "../models/cart.model";

export const createCart = async (req: Request, res: Response) => {
  const { userId, productId, quantity, totalAmount } = req.body;
  try {
    const findUserCart = await Cart.findOne({ user: userId });

    if (!findUserCart) {
      const cart = await Cart.create({
        user: userId,
        products: { product: productId, quantity },
        totalAmount,
      });
      return res.status(200).json({ message: "created new cart", cart });
    }

    const findDuplicated = findUserCart.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (findDuplicated > -1) {
      findUserCart.products[findDuplicated].quantity += quantity;
    } else {
      findUserCart.products.push({
        product: productId,
        quantity,
      });
    }
    console.log(findDuplicated);

    const updatedCart = await findUserCart.save();
    res.status(200).json({ message: "updated cart", updatedCart });
  } catch (error) {
    res.status(400).json({ message: "failed to read carts" });
  }
};

export const getCarts = async (req: Request, res: Response) => {
  // const { userId, productId, quantity } = req.body;
  try {
    const findCarts = await Cart.find({});
    res.status(200).json({ message: "Get all carts", findCarts });
  } catch (error) {
    res.status(400).json({ message: "failed" });
  }
};
//  ()=>{}
//  function (){}
