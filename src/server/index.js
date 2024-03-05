import express from "express";
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import connectDB from './config/db.js'
import router from "./routes/routes.js";

const port = 8080;

connectDB();

const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/api", router);


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});