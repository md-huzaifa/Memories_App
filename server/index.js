import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import postRouter from "./routes/posts.js";

const app = express();

dotenv.config();


app.use(bodyParser.json({ limit: "30mb"}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts',postRouter)

const CONNECTION_URL =
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@test-cluster-1.7l5gg.mongodb.net/?retryWrites=true&w=majority`;

const PORT = process.env.port || 5000;

mongoose.set('strictQuery', false)

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`server's running on port: ${PORT}`)))
  .catch((error) => console.log(error.message))

