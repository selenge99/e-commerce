import { Router } from "express";
import { signup } from "./controllers/auth-controller";

const router = Router();
router.route("/signup").post(signup);
// router.route("/login").post(login);
export default router;
