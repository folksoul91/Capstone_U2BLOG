const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const PORT = 3000;

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log("MONGODB connection is good"))
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
