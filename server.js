require('dotenv').config()
const express = require("express");
const app = express();
const newGuide = require("./routes/guide");
const getGuide = require("./routes/guides");
const path = require('path');

const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));

require("./database/connection");
app.use(newGuide);
app.use(getGuide);

app.get("/", (req, res) => {
  res.send("Success: 200 OK");
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
