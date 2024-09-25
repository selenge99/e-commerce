import { Router } from "express";
import { product } from "../controllers/product-controller";

const router = Router();
router.route("/product").post(product).get(product);

export default router;
