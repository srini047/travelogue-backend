const express = require("express");
const router = express.Router();
const tourist = require("../models/tourist_schema");

router.post("/newTourist", function (req, res) {
  try {
    const name = req.query.name;
    const email = req.query.email;
    // const number = Number(req.query.number);
    const loc = req.query.loc;
    const lang = req.query.lang;
    const need = req.query.need;
    // const ratings = Number(req.query.ratings);

    const newTourist = new tourist({
      name: `${name}` || "Test",
      email: `${email}` || "test@test.com",
      phone_number: 1223,
      location: `${loc}` || "acfvcsfvs",
      languages: `${lang}` || ["Eng", "hindi"],
      needs: `${need}` || "person with deep understanding of technical skills...",
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
