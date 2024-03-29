const db = require("../db.js");
const jwt = require("jsonwebtoken");

const getPosts = (req, res) => {
  const q = req.query.category
    ? "SELECT * FROM posts WHERE category=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.category], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

const getPost = (req, res) => {
  const q =
    "SELECT p.`id`, `username`,`title`,`description`,p.`image`,u.`image` AS userImage,`date`,`category` FROM `users` u JOIN `posts` p ON u.`id`=p.`userid` WHERE p.`id`=? ";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");
  jwt.verify(token, "jwtKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const q =
      "INSERT INTO posts(`title`,`description`,`image`,`category`,`date`,`userid`)VALUES (?, ?, ?, ?, ?, ?)";

    const values = [
      req.body.title,
      req.body.description,
      req.body.image,
      req.body.category,
      req.body.date,
      userInfo.id,
    ];

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      res.status(200).json("Post is created");
    });
  });
};

const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");
  jwt.verify(token, "jwtKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id`=? AND `userid`=?";
    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("you can't delete this post");
      return res.json("Post has been deleted !");
    });
  });
};

const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");
  jwt.verify(token, "jwtKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const postId = req.params.id;
    const q =
      "UPDATE posts SET `title`=?,`description`=?,`image`=?,`category`=? WHERE `id`=? AND `userid`=?";

    const values = [
      req.body.title,
      req.body.description,
      req.body.image,
      req.body.category,
    ];

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post is created");
    });
  });
};

module.exports = {
  getPosts,
  updatePost,
  deletePost,
  addPost,
  getPost,
};
