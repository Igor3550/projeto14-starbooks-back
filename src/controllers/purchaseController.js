import db from "../db.js";
import purchaseSchema from "../schemas/purchaseSchema.js";

async function getPurchase(req, res) {
	const user = res.locals.user;

	try {
		const purchases = await db
			.collection("purchases")
			.find({ userId: user._id })
			.toArray();
		res.send(purchases);
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}

async function postPurchase(req, res) {
	const purchase = req.body;
	const user = res.locals.user;

	try {
		const validation = purchaseSchema.validate(purchase);
		if (validation.error) {
			return res.status(422).send({ message: validation.error.message });
		}

		await db
			.collection("purchases")
			.insertOne({ ...purchase, userId: user._id });
		res.sendStatus(201);
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}

export { getPurchase, postPurchase };
