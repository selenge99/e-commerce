import { Router } from "express";
import {
  getAllProduct,
  product,
  getProduct,
} from "../controllers/product-controller";

const router = Router();
router.route("/product").post(product).get(getAllProduct);
router.route("/:productId").get(getProduct);

export default router;
