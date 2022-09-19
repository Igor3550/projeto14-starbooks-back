import joi from "joi";

const purchaseSchema = joi.object({
	adress: joi.string().required().trim(),
	cep: joi.string().required(),
	booksIds: joi.array().required(),
});

export default purchaseSchema;
