import { Users } from "../model/users.js";
import { Transferes } from "../model/transferes.js";

export const getUsers = async (req, res) => {
  const users = await Users.find();
  res.send(users);
};

export const transfere = async (req, res) => {
  const sender = await Users.findById(req.body.senderId);
  const receiver = await Users.findById(req.body.receiverId);
  const amount = Number(req.body.amount);
  if (sender && receiver && amount) {
    sender.balance -= amount;
    receiver.balance += amount;
    const trans = new Transferes({
      senderId: req.body.senderId,
      receiverId: req.body.receiverId,
      amount: req.body.amount,
    });
    try {
      await sender.save();
      await receiver.save();
      await trans.save();
      res.status(200);
      res.send("success");
    } catch (err) {
      res.send(err);
    }
  } else {
    res.send({ error: "Incorrect data" });
  }
};
