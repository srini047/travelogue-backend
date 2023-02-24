require("dotenv").config();
const mongoose = require("mongoose");

const db = process.env.MONGO_DB_URL;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to database ${db}`);
  })
  .catch((err) => {
    console.log("error connecting to db", err);
  });
