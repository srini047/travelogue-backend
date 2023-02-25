require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/places", async (req, res) => {
  const config = {
    method: "get",
    url: `https://api.geoapify.com/v2/places?type=tourism&lat=48.68573055&lon=10.81881479176283&limit=20&apiKey=${process.env.GEOAPIFY_PLACES_API}`,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
