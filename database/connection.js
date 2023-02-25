require("dotenv").config();
const mongoose = require("mongoose");

const db = process.env.MONGO_DB_URL;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to database...`);
  })
  .catch((err) => {
    console.log("Error connecting to database...\n\n\n\n", err);
  });
