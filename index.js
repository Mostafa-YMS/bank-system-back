import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { bankRouter } from "./routes/bank.js";

const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});

const url = "mongodb://localhost/bankSystemDB";
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on("open", () => {
  console.log("connected....");
});

app.use("/", bankRouter);
