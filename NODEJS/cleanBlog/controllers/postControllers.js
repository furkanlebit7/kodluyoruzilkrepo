const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.render("index", {
    posts,
  });
};
exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", {
    post,
  });
};

exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.title = req.body.title;
  post.subTitle = req.body.subTitle;
  post.description = req.body.description;
  post.save();
  res.redirect(`/posts/${req.params.id}`);
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
};
exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
