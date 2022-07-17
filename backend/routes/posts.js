const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// Create Post Route
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Post Route
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatePost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("Users can only update their own posts!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Post Route

// Get Post Route
router.get("/:id", async (req, res) => {});
module.exports = router;
