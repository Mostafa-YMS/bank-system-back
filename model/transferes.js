import mongoose from "mongoose";

const transferesSchem = new mongoose.Schema({
  senderId: { type: String, required: true },
  receiverId: { type: String, required: true },
  amount: { type: Number, required: true },
});

export const Transferes = mongoose.model("Transferes", transferesSchem);
