const mongoose = require("mongoose");
// const validator = require("validator");

const tourGuide = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: Number, required: true },
  biography: { type: String, required: true },
  language: { type: [String], required: true },
});

const newTourGuide = new mongoose.model("newTourGuide", tourGuide);
module.exports = newTourGuide;
