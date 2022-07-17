const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// User Register Route
router.post("/register", async (req, res) => {
  try {
    // using bcrypt to hash the password that's generated
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
