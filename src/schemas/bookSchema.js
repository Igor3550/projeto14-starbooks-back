import joi from "joi";

const bookSchema = joi.object({
	title: joi.string().required().trim(),
	autor: joi.string().required().trim(),
	genre: joi.string().required().trim(),
	publisher: joi.string().required().trim(),
	publication: joi.string().required().trim(),
	language: joi.string().required().trim(),
	description: joi.string().required().trim(),
	pages: joi.string().required().trim(),
	translators: joi.string(),
	ISBN: joi.string().required(),
	dimensions: joi.string().required(),
	image: joi
		.string()
		.uri()
		.required()
		.trim()
		.pattern(/\.(jpg|jpeg|png|webp|avif|gif|svg)$/),
	price: joi.number().required(),
});

export default bookSchema;
