const express = require("express");
const ejs = require("ejs");
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override");
const Photo = require("./models/Photo");
const mongoose = require("mongoose");
const fs = require("fs");
const { findById } = require("./models/Photo");

const app = express();

//CONNECT DB
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/pcat", {
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
app.use(fileUpload());
app.use(methodOverride("_method", { methods: ["GET", "POST"] }));

//ROUTES
app.get("/", async (req, res) => {
  const photos = await Photo.find().sort("-datecreated");
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
app.delete("/photos/:id", async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  let deleteImage = __dirname + "/public" + photo.image;
  fs.unlinkSync(deleteImage);
  await Photo.findByIdAndDelete(req.params.id);
  res.redirect("/");
});
app.put("/photos/:id", async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  photo.title = req.body.title;
  photo.description = req.body.description;
  photo.category = req.body.category;
  photo.save();
  res.redirect(`/photos/${req.params.id}`);
});
app.get("/add", (req, res) => {
  res.render("add");
});
app.get("/photo", (req, res) => {
  res.render("photo");
});
app.get("/edit/:id", async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render("edit", {
    photo,
  });
});

app.post("/photos", async (req, res) => {
  const uploadDir = "public/uploads";

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadedImage = req.files.image;
  let uploadPath = __dirname + "/public/uploads/" + uploadedImage.name;

  uploadedImage.mv(uploadPath, async () => {
    await Photo.create({
      ...req.body,
      image: "/uploads/" + uploadedImage.name,
    });
    res.redirect("/");
  });
});

const port = 3000;
app.listen(port, () => {
  console.log("Project is up");
});
