import { Router } from "express";
import { generateOTP, getUser, login, register, resetPassword, resetSession, updateUser, verifyOTP, verifyUser } from "../controllers/userController.js";
import { auth, localVariable } from "../middleware/auth.js";
import { registerMail } from "../controllers/mailer.js";

const router = Router()

router.post('/register', register)
router.post("/login", login);
router.post('/authenticate', )
router.post('/send/mail', registerMail)

router.put("/update/user/:id",auth, updateUser);
router.put('/reset/password/:id',verifyUser, resetPassword)

router.get("/user/:username", getUser);
router.get('/generate/otp', localVariable, verifyUser, generateOTP)
router.get("/verify/otp", verifyOTP);
router.get('/create/reset/session', resetSession)


export default router