import { Router } from "express";
import {
  createCategory,
  getAllCategory,
} from "../controllers/category-controller";

const router = Router();
router.route("/category").post(createCategory).get(getAllCategory);
// /api/v1/category
export default router;
