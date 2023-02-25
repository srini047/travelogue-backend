const mongoose = require("mongoose");
// const validator = require("validator");

const tourist = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: Number, required: true },
  location: { type: String, required: true },
  language: { type: [String], required: true },
  needs: { type: String, required: true },
});

const newTourist = new mongoose.model("newTourist", tourist);
module.exports = newTourist;
