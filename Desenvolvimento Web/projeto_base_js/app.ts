import express from "express";
import { productRouter } from "./src/routes/productRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.APP_PORT;

app.use(express.json());

app.use('/product', productRouter);

app.listen(port, () => {
    console.log(`servidor executando na porta ${port}`);
});
