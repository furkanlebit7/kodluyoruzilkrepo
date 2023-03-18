const express = require("express");

const app = express();

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.static("public"));

//ROUTE
app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "temp/index.html"));
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add-post", (req, res) => {
  res.render("add_post");
});
app.get("/post", (req, res) => {
  res.render("post");
});

const port = 3000;
app.listen(port, () => {
  console.log("Project is up");
});
