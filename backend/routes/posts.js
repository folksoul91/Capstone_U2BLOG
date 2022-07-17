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
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Your post has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("Users can only delete their own posts!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Post Route
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for all posts by user specific
router.get("/", async (req, res) => {
  const username = req.query.user;
  const categoryName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (categoryName) {
      posts = await Post.find({
        categories: {
          $in: [categoryName],
        },
      });
      // fetch all posts if no users or cat name
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
