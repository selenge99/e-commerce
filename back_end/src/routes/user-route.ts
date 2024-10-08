import { Router } from "express";
import { getAlluser } from "../controllers/user-controller";

const router = Router();
router.route("/user").get(getAlluser);

export default router;
