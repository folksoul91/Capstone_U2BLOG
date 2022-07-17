const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const PORT = 3000;

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log("MONGODB connection is good"))
  .catch((err) => {
    console.log(err);
  });

app.use("/backend/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
