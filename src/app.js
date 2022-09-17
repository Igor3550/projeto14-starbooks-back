import express from "express";
import cors from "cors";
import authRouter from "./routers/authRouter.js";
import booksRouter from "./routers/booksRouter.js";
import cartRouter from './routers/cartRouter.js';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(authRouter);
app.use(booksRouter);
app.use(cartRouter);

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
