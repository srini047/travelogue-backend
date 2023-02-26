const express = require("express");
const router = express.Router();
const newTourGuide = require("../models/tourist_guide_schema");

router.post("/newGuide", function (req, res) {
  try {
    const name = req.query.name;
    const email = req.query.email;
    // const number = Number(req.query.number);
    const bio = req.query.bio;
    const lang = req.query.lang;
    // const ratings = Number(req.query.ratings);

    const tourGuide = new newTourGuide({
      name: `${name}` || "test",
      email: `${email}` || "test@example.com",
      phone_number: 1223,
      biography: `${bio}` || "Bio of test",
      languages: `${lang}` || ['English', 'Telugu', 'Hindi'],
      ratings: 5,
    });

    tourGuide.save();
    console.log("Saved...");
    res.status(req.body);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

module.exports = router;
