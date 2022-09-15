import express from 'express';
import { signUp } from "../controllers/authController.js";
import { signUpMiddleware } from '../middlewares/authMiddlewares.js';

const router = express.Router()

router.post('/sign-up', signUpMiddleware, signUp);

export default router;