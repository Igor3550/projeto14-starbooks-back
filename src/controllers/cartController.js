import db from "../db.js";

async function addOnCart (req, res) {
  const user = res.locals.user
  const book = res.locals.book
  const { bookId } = req.params
  try {
    const userCart = await db.collection('cart').find({userId: user._id}).toArray()
    const existentInCart = userCart.filter((item) => item.bookId === bookId);
    if(existentInCart.length > 0) return res.status(409).send('Item já existente no carrinho!')
    await db.collection('cart').insertOne({userId:user._id, bookId, book})
    res.sendStatus(201)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

async function getCartItems (req, res) {
  const user = res.locals.user
  try {
    const userCart = await db.collection('cart').find({userId: user._id}).toArray();

    res.send(userCart)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export {
  addOnCart,
  getCartItems
}