const express = require("express");
const router = express.Router();
const tourist = require("../models/tourist_schema");

router.post("/newTourist", function (req, res) {
  try {
    const newTourist = new tourist({
      name: "Test",
      email: "test@test.com",
      phone_number: 1223,
      location: "acfvcsfvs",
      languages: ["Eng", "hindi"],
      needs: "person with deep understanding of technical skills...",
      ratings: 4.9
    });

    newTourist.save();
    console.log("Saved...");
    res.status(req.body);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

module.exports = router;
