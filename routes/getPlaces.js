require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/places", async (req, res) => {
  const latitude = req.query.latitude || 13.534534534;
  const longitude = req.query.longitude || 45.4353545;
  const limit = req.query.limit || 15;
  const config = {
    method: "get",
    url: `https://api.geoapify.com/v2/places?type=tourism&lat=${latitude}&lon=${longitude}&limit=${limit}&apiKey=${process.env.GEOAPIFY_PLACES_API}`,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data.features);
      res.send(response.data.features);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
