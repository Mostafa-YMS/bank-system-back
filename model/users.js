import mongoose from "mongoose";

const usersSchem = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  balance: { type: Number, required: true },
});

export const Users = mongoose.model("Users", usersSchem);
