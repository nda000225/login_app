import { Router } from "express";

const router = Router()

router.post('/register', )
router.post('/login', )
router.post('/authenticate', )
router.post('/register/mail', )

router.put('/updateuser', )
router.put('/reset', )

router.get('/user/:username', )
router.get('/generate/otp', )
router.get('/verify/otp', )
router.get('/create/reset/session', )


export default router