import joi from "joi";

const bookSchema = joi.object({
	title: joi.string().required().trim(),
	autor: joi.string().required().trim(),
	genre: joi.string().required().trim(),
	description: joi.string().required().trim(),
	image: joi
		.string()
		.uri()
		.required()
		.trim()
		.pattern(/\.(jpg|jpeg|png|webp|avif|gif|svg)$/),
	price: joi.number().required(),
});

export default bookSchema;
