import express from "express";
import { getUsers, transfere } from "../controllers/bank.js";

export const bankRouter = express.Router();

bankRouter.get("/users", getUsers);
bankRouter.post("/transfere", transfere);
bankRouter.use((req, res) => {
  res.status(404);
  res.send({ error: "Not found" });
});