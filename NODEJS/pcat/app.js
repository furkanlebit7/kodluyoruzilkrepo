const express = require("express");
const ejs = require("ejs");
const Photo = require("./models/Photo");
const mongoose = require("mongoose");

const app = express();

//CONNECT DB
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test", {
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
  const photos = await Photo.find();
  res.render("index", {
    photos,
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/photos/:id", async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render("photo", {
    photo,
  });
});
app.get("/add", (req, res) => {
  res.render("add");
});
app.get("/photo", (req, res) => {
  res.render("photo");
});
app.get("/video-page", (req, res) => {
  res.render("video-page");
});

app.post("/photos", async (req, res) => {
  await Photo.create(req.body);
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log("Project is up");
});
