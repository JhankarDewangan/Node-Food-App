const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressSchema = mongoose.Schema({
  username: String,
  floor: String,
  detailed: String,
  landmark: String,
  city: String,
  state: String,
  pincode: String,
});

const Address = mongoose.model("address", addressSchema);

module.exports.Address = Address;
