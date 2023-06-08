const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mohamed123",
  database: "blog",
});
module.exports = db;
