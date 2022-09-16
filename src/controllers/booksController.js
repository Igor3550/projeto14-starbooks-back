import db from "../db.js";
import bookSchema from "../schemas/bookSchema.js";

async function getBooks(req, res) {
	const genre = req.body.genre;
	const BookId = req.query.id;

	try {
		const books = await db.collection("books").find().toArray();

		if (genre) {
			const filteredBooks = books.filter((el) => el.genre === genre);
			console.log(genre);
			return res.send(filteredBooks);
		} else if (BookId) {
			const filteredBook = books.filter((el) => el._id.toString() === BookId);
			return res.send(filteredBook);
		} else {
			res.send(books);
		}
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}

async function postBook(req, res) {
	const book = req.body;

	try {
		const validation = bookSchema.validate(book);

		if (validation.error) {
			return res.status(422).send({ message: validation.error.message });
		}

		await db.collection("books").insertOne(book);
		res.sendStatus(201);
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}

export { getBooks, postBook };
