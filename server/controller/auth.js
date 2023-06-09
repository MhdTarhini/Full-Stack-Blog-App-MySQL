const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const register = (req, res) => {
  //Check existing user
  const q = "SELECT * FROM blog.users WHERE email=? OR username=?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("user is already existe");
    // hash the password and create user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO users(`image`,`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.image, req.body.username, req.body.email, hash];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User is created");
    });
  });
};
const login = (req, res) => {
  console.log(req.body);
  //CHECK USER
  const q = "SELECT FROM users WHERE username=?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found !");

    //CHECK PASSWORD
    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!isPasswordValid)
      return res.status(400).json("Wrong Username or Password");
  });
  //LOGIN
  const token = jwt.sign({ id: data[0].id }, "jwtKey");
  console.log(data);
  const { password, ...other } = data[0];
  res
    .cookie("access_token", token, {
      httpOnly: true,
    })
    .status(200)
    .json(other);
};
const logout = (req, res) => {};

module.exports = {
  register,
  login,
  logout,
};
