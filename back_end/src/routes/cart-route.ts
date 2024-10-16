import { Router } from "express";

import {
  createCart,
  getCart,
  updateCart,
} from "../controllers/cart-controller";
import { auth } from "../middlewares/auth";

const router = Router();
router.route("/").post(createCart);
router.route("/get-cart").get(auth, getCart);
router.route("/update-cart").put(auth, updateCart);

export default router;
