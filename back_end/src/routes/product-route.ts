import { Router } from "express";
import { getAllProduct, product } from "../controllers/product-controller";

const router = Router();
router.route("/product").post(product).get(getAllProduct);

export default router;
