const express = require("express");
const {
  getPosts,
  getPost,
  addPost,
  deletePost,
  updatePost,
} = require("../controller/posts");
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.patch("/:id", updatePost);


module.exports = router;
