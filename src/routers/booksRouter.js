import express from "express";
import { getBooks, postBook } from "../controllers/booksController.js";

const router = express.Router();

router.get("/books", getBooks);
router.post("/books", postBook);

export default router;
