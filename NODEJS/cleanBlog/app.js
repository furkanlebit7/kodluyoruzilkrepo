const express = require("express");
const ejs = require("ejs");
const Post = require("./models/Post");
const mongoose = require("mongoose");

const app = express();

//CONNECT DB
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/cleanBlog", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};
connectDb();

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTE
app.get("/", async (req, res) => {
  const posts = await Post.find();
  res.render("index", {
    posts,
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add-post", (req, res) => {
  res.render("add_post");
});
app.get("/posts/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", {
    post,
  });
  console.log(post);
});
app.get("/post", (req, res) => {
  res.render("post");
});
app.post("/posts", async (req, res) => {
  console.log(req.body);
  await Post.create(req.body);
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log("Project is up");
});
