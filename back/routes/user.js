import { Router } from "express";
import { generateOTP, getUser, login, register, resetPassword, resetSession, updateUser, verifyOTP, verifyUser } from "../controllers/userController.js";

const router = Router()

router.post('/register', register)
router.post("/login", verifyUser, login);
router.post('/authenticate', )
router.post('/register/mail', )

router.put("/update/user/:id", updateUser);
router.put('/reset/password', resetPassword)

router.get("/user/:username", getUser);
router.get('/generate/otp', generateOTP)
router.get("/verify/otp", verifyOTP);
router.get('/create/reset/session', resetSession)


export default router