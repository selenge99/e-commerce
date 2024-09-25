// CRUD

import { Request, Response } from "express";
import Category from "../models/category.model";

//CREATE
export const createCategory = async (req: Request, res: Response) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ message: "Hooson utga baij bolohgui" });
  }

  const createdCategory = await Category.create({ name, description });
  res.status(201).json({
    message: " create category is successfull",
    category: createdCategory,
  });
};

//READ
export const getAllCategory = async (req: Request, res: Response) => {
  const categories = await Category.find({});

  res.status(201).json({
    message: "get categories is successfull",
    category: categories,
  });
};
