import db from "../db.js";
import { ObjectId } from 'mongodb'

async function addOnCartMiddleware (req, res, next) {
  const { bookId } = req.params
  if(!bookId) return res.sendStatus(400);
  try {
    const book = await db.collection('books').findOne({_id:ObjectId(bookId)});
    if(!book) return res.status(400).send('Item não encontrado!');
    res.locals.book = book;
    next();
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

export default addOnCartMiddleware;