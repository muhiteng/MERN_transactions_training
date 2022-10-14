import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Transaction from "./models/Transaction.js";
import TransactionApi from "./routes/TransactionsApi.js";
import connectDb from "./database/mongodb.js";
const PORT = 4000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/transaction", TransactionApi);
connectDb();
app.get("/", (req, res) => {
  res.json({ message: "message" });
});

app.listen(PORT, () => {
  console.log(`server running on prort ${PORT}`);
});
