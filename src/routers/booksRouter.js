import express from "express";
import { getBooks, postBook } from "../controllers/booksController";

const router = express.Router();

router.get("/books/:genre", getBooks);
router.post("/books", postBook);

export default router;
