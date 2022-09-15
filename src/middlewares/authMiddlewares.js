import joi from 'joi';

const signUpSchema = joi.object({
  name:joi.string().required(),
  email:joi.string().email().required(),
  password:joi.string().required()
});

function signUpMiddleware (req, res, next) {
  const user = req.body;
  const validation = signUpSchema.validate(user);
  if(validation.error){
    const error = validation.error.details[0].message
    return res.status(422).send(error);
  }
  next()
}

export {
  signUpMiddleware
}