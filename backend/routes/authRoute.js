import { Router } from "express";
import { login, signup, logout } from "../controller/user.js";
import { verifyToken } from "../middleware/verifyuser.js";
const router = Router()

router.get("/verify-user", verifyToken)
router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)




export default router;
