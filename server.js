require('dotenv').config()
const express = require("express");
const app = express();
const newGuide = require("./routes/guide");
const getGuides = require("./routes/guides");
const newTourist = require("./routes/tourist");
const getTourists = require("./routes/tourists");
const getPlaces = require("./routes/getPlaces");
const details = require("./routes/details");
const path = require('path');

const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));

require("./database/connection");
app.use(newGuide);
app.use(getGuides);
app.use(newTourist);
app.use(getTourists);
app.use(getPlaces);
app.use(details);

app.get("/", (req, res) => {
  res.send("Success: 200 OK");
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
