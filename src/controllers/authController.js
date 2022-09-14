import db from '../db.js';
import bcrypt from 'bcrypt'

async function signUp (req, res) {
  const user = req.body;

  try {
    const passwordHash = bcrypt.hashSync(user.password, 10);
    await db.collection('users').insertOne({...user, password:passwordHash});
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

function signIn (req, res) {
  const user = req.body;
  try {
    const token = uuid();
    const existentUser = {}
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export {
  signUp
}