import express from 'express';
import tokenVerify from '../middlewares/tokenMiddleware.js';
import addOnCartMiddleware from '../middlewares/cartMiddleware.js';
import { addOnCart, deleteItem, getCartItems } from '../controllers/cartController.js';

const router = express.Router();

router.post('/cart/add/:bookId', tokenVerify, addOnCartMiddleware, addOnCart )
router.delete('/cart/delete/:bookId', tokenVerify, addOnCartMiddleware, deleteItem )
router.get('/cart', tokenVerify, getCartItems )

export default router;