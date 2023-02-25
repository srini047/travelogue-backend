const express = require("express");
const router = express.Router();
const newTourGuide = require("../models/tourist_guide_schema");

router.post("/newGuide", function (req, res) {
  try {
    const tourGuide = new newTourGuide({
      name: "Test",
      email: "test@test.com",
      phone_number: 1223,
      biography: "acfvcsfvs",
      languages: ["English", "Hindi", "Tamil", "Telugu",],
      ratings: 5.0,
    });

    tourGuide.save();
    console.log("Saved...");
    res.status(req.body);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

module.exports = router;
