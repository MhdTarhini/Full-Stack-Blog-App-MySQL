const express = require("express");
const postRoutes = require("./router/posts");
const userRoutes = require("./router/users");
const authRoutes = require("./router/auth");
const cookieParser = require("cookie-parser");
const multer = require("multer");

const app = express();

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(4000, () => {
  console.log("server is runnung");

});
