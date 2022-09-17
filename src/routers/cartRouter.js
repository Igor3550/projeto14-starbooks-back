import express from 'express';
import tokenVerify from '../middlewares/tokenMiddleware.js';
import addOnCartMiddleware from '../middlewares/cartMiddleware.js';
import { addOnCart, getCartItems } from '../controllers/cartController.js';

const router = express.Router();

router.post('/cart/add/:bookId', tokenVerify, addOnCartMiddleware, addOnCart )
router.get('/cart', tokenVerify, getCartItems )

export default router;