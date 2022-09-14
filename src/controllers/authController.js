import db from '../db.js';

async function signUp (req, res) {
  const user = req.body;

  try {
    await db.collection('users').insertOne({name: user.name, email:user.email});
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

export {
  signUp
}