import express from "express";
import cors from "cors";
import authRouter from "./routers/authRouter.js";
import booksRouter from "./routers/booksRouter.js";
import cartRouter from "./routers/cartRouter.js";
import purchaseRouter from "./routers/purchaseRouter.js";
import favoritesRouter from "./routers/favoritesRouter.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(authRouter);
app.use(booksRouter);
app.use(cartRouter);
app.use(purchaseRouter);
app.use(favoritesRouter);

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
