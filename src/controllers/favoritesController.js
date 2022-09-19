import db from "../db.js";

async function getFavorites(req, res) {
	const user = res.locals.user;

	try {
		const allFavorites = await db.collection("favorites").find().toArray();
		const favoritesFiltered = allFavorites.filter(
			(el) => Object(el.userId).toString() === Object(user._id).toString(),
		);
		res.send(favoritesFiltered);
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}

async function postFavorites(req, res) {
	const user = res.locals.user;
	const { bookId } = req.params;

	try {
		const books = await db.collection("books").find().toArray();

		const favoritedBook = books.filter(
			(item) => Object(item._id).toString() === bookId,
		);

		if (!favoritedBook) {
			return res.status(409).send("Item não encontrado");
		}

		await db
			.collection("favorites")
			.insertOne({ ...favoritedBook[0], userId: user._id });
		res.sendStatus(201);
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}

export { getFavorites, postFavorites };
