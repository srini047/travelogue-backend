require('dotenv').config()
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

require("./database/connection");

app.get("/", (req, res) => {
  res.send("Success: 200 OK");
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
