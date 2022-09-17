import express from 'express';
import { signIn, signUp } from "../controllers/authController.js";
import { signInMiddleware, signUpMiddleware } from '../middlewares/authMiddlewares.js';

const router = express.Router()

router.post('/sign-up', signUpMiddleware, signUp);
router.post('/sign-in', signInMiddleware, signIn);

export default router;