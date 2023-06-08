const db = require("../db");
const bcrypt = require("bcryptjs");
const register = (req, res) => {
  //Check existing user
  const q = "SELECT * FROM blog.users WHERE email=? OR username=?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    console.log(req.body);
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("user is existe");
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
const login = (req, res) => {};
const logout = (req, res) => {};

module.exports = {
  register,
  login,
  logout,
};
