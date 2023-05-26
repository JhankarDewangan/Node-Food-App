const express = require("express");
const addr = express.Router();
const Address = require("../model/address").Address;

addr.get("/", async (req, res) => {
  let data = await Address.find({ username: req.body.username });
  if (data[0]) {
    res.json(data);
  } else {
    res.json({ message: "User has no saved addresses" });
  }
});

addr.post("/", async (req, res) => {
  const { username, city, state, floor, landmark, detailed, pincode } =
    req.body;
  let address = new Address();
  address.username = username;
  address.city = city;
  address.state = state;
  address.floor = floor;
  address.landmark = landmark;
  address.detailed = detailed;
  address.pincode = pincode;
  let response = await address.save();
  res.json(await response);
});
module.exports.addr = addr;
