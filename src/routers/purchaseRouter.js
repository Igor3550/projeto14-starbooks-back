import express from "express";
import tokenVerify from "../middlewares/tokenMiddleware.js";
import {
	getPurchase,
	postPurchase,
} from "../controllers/purchaseController.js";

const router = express.Router();

router.use(tokenVerify);

router.get("/purchases", getPurchase);
router.post("/purchases", postPurchase);

export default router;
