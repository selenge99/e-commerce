import { Request, Response } from "express";
import Product from "../models/product.model";

export const product = async (req: Request, res: Response) => {
  try {
    const {
      name,
      description,
      price,
      size,
      images,
      isNew,
      quantity,
      discount,
      category,
    } = req.body;

    const createdProduct = await Product.create({
      name,
      description,
      price,
      size,
      images,
      isNew,
      quantity,
      discount,
      category,
    });
    res
      .status(201)
      .json({ message: "created category", product: createdProduct });
  } catch (error) {
    res.status(500).json({ message: "Aldaa" });
  }
};
