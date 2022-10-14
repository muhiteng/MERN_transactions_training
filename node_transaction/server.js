import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Transaction from "./models/Transaction.js";

const PORT = 4000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose
  .connect(
    "mongodb+srv://mern_test:mern_test@cluster0.tw22qtc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("mongoose connected "))
  .catch((err) => console.err(err));
app.get("/", (req, res) => {
  res.json({ message: "message" });
});
app.get("/transaction", async (req, res) => {
  const transactions = await Transaction.find({}).sort({ createdAt: -1 });
  res.json({ data: transactions });
});
app.post("/transaction", async (req, res) => {
  const { amount, description, date } = req.body;
  const transaction = new Transaction({ amount, description, date });
  const result = await transaction.save();
  res.json({ message: result });
});
app.listen(PORT, () => {
  console.log(`server running on prort ${PORT}`);
});
