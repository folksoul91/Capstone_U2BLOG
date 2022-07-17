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

// User Login Route
router.post("/login", async (req, res) => {
  try {
    //fetching password from user
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Your username is incorrect!");

    // comparing bcrypted password from the actual user password
    const validation = await bcrypt.compare(req.body.password, user.password);
    !validation && res.status(400).json("Incorrect Password!");

    // below is to only show usercredentials without password
    const { password, ...others } = user._doc;

    // if all is good then the user will get 200 http res
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
