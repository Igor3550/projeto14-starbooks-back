import express from "express";
import cors from "cors";
import authRouter from "./routers/authRouter.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(authRouter);

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
