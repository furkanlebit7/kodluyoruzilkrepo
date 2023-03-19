const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const postController = require("./controllers/postControllers");
const pageController = require("./controllers/pageControllers");

const app = express();

//CONNECT DB
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://furkanlebit7:wmD6thh8JatErzPn@celanblog-app.vv0msey.mongodb.net/cleanBlog?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
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
app.use(methodOverride("_method", { methods: ["GET", "POST"] }));

//ROUTE
app.get("/", postController.getAllPosts);
app.get("/posts/:id", postController.getPost);
app.put("/posts/:id", postController.updatePost);
app.post("/posts", postController.createPost);
app.delete("/posts/:id", postController.deletePost);

app.get("/about", pageController.getAboutPage);
app.get("/add-post", pageController.getAddPage);
app.get("/edit/:id", pageController.getEditPage);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(process.env);
  console.log("Project is up");
});
