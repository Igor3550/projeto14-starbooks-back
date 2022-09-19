import express from "express";
import {
	getFavorites,
	postFavorites,
} from "../controllers/favoritesController.js";
import tokenVerify from "../middlewares/tokenMiddleware.js";

const router = express.Router();

router.use(tokenVerify);

router.get("/favorites", getFavorites);
router.post("/favorites/:bookId", postFavorites);

export default router;
