const express = require("express");
const postRoutes = require("./router/posts");
const userRoutes = require("./router/users");
const authRoutes = require("./router/auth");

const app = express();
app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(4000, () => {
  console.log("server is runnung");
});
