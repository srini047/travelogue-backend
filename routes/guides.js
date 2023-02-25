require("dotenv").config();
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const tourGuideSchema = require("../models/tourist_guide_schema");

router.get("/guides", function (req, res) {
  const db = process.env.MONGO_DB_URL;
  mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to the database!");
      // Find all documents in the collection
      tourGuideSchema.find({}, (err, docs) => {
        if (err) {
          console.log("Error fetching documents:", err);
        } else {
          console.log("Documents:", docs);
        }
      });
    })
    .catch((err) => console.log("Error connecting to the database:", err));
});

module.exports = router;
