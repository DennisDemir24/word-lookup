import express from "express";
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectDB from './config/db.js'
import router from "./routes/routes.js";

const port = 8080;

connectDB();

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://word-lookup.vercel.app')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})
app.use(cors({
  origin: 'https://word-lookup.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use("/api", router);


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});