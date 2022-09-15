import express from "express";
import db from "../db.js";
import bookSchema from "../schemas/bookSchema.js";

const router = express.Router();

router.get("/books", async (req, res) => {});

router.post("/books", async (req, res) => {
	const book = req.body;

	try {
		const validation = bookSchema.validate(book);
		if (validation.error) {
			return res.status(422).send({ message: validation.error.message });
		}

		await db.collection("books").insertOne(book);
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
});

export default router;
