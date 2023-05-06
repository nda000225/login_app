import express from 'express'
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connect from './database/mongodb.js';

dotenv.config();

const app = express();
const port = process.env.PORT;
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors(corsOptions));
app.use(morgan('tiny'));


app.get("/", (req, res) => {
  res.send("Akwaba");
});
app.use(({ res }) => {
  res.status(404).json({ success: false, message: "Not found it!" });
});

app.listen(port, () => {
  connect();
  console.log(`Connected to Backend online ${port} ✔️`);
});