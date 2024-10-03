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

export const getAllProduct = async (req: Request, res: Response) => {
  const products = await Product.find({}).populate("category");

  res.status(200).json({
    message: "get products is successfull",
    products: products,
  });
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    res
      .status(200)
      .json({ message: "Success to get a product", product: product });
  } catch (error) {
    console.error("err", error);
    res.status(400).json({ message: "failed to get a product" });
  }
};
