import { Router } from "express";
import { signup, login } from "../controllers/auth-controller";
import { getCurrentUser } from "../controllers/user-controller";
import { auth } from "../middlewares/auth";

const router = Router();
router.route("/current-user").get(auth, getCurrentUser);
router.route("/signup").post(signup);
router.route("/login").post(login);

export default router;
