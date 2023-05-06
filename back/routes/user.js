import { Router } from "express";
import { generateOTP, getUser, login, register, resetPassword, resetSession, updateUser, verifyOTP, verifyUser } from "../controllers/userController.js";
import { auth, localVariable } from "../middleware/auth.js";

const router = Router()

router.post('/register', register)
router.post("/login", verifyUser, login);
router.post('/authenticate', )
router.post('/register/mail', )

router.put("/update/user/:id",auth, updateUser);
router.put('/reset/password',verifyUser, resetPassword)

router.get("/user/:username", getUser);
router.get('/generate/otp', localVariable, verifyUser, generateOTP)
router.get("/verify/otp", verifyOTP);
router.get('/create/reset/session', resetSession)


export default router