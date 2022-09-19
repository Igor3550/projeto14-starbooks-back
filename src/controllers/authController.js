import db from '../db.js';
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'

async function signUp (req, res) {
  const user = req.body;

  try {
    const existentUser = await db.collection('users').findOne({email:user.email});
    if(existentUser) return res.status(400).send('E-mail já cadastrado!')
    const passwordHash = bcrypt.hashSync(user.password, 10);
    await db.collection('users').insertOne({...user, password:passwordHash});
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

async function signIn (req, res) {
  const user = req.body;
  try {
    const existentUser = await db.collection('users').findOne({email:user.email});
    if(!existentUser) return res.status(422).send("Usuário e/ou senha invalido(s)!");
    if(!bcrypt.compareSync(user.password, existentUser.password)) return res.status(422).send("Usuário e/ou senha invalido(s)!");
    const token = uuid();
    delete existentUser.password;
    db.collection('sessions').insertOne({token, userId:existentUser._id})
    res.send({token, user:existentUser});
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export {
  signUp,
  signIn
}