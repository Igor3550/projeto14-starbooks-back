import joi from "joi";

const bookSchema = joi.object({
	title: joi.string().required(),
	autor: joi.string().required(),
	genre: joi.string().required(),
	description: joi.string().required(),
	image: joi.url().required(),
	price: joi.number().required(),
});

export default bookSchema;
