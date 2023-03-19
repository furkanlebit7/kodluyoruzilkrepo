const express = require("express");
const ejs = require("ejs");
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const photoController = require("./controllers/photoControllers");
const pageController = require("./controllers/pageControllers");
const app = express();

//CONNECT DB
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://furkanlebit7:bKMHxLuXX9qFGCSP@pcat-app.vjt2tnc.mongodb.net/pcat-db?retryWrites=true&w=majority",
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
app.use(fileUpload());
app.use(methodOverride("_method", { methods: ["GET", "POST"] }));

//ROUTES
app.get("/", photoController.getAllPhotos);
app.get("/photos/:id", photoController.getPhoto);
app.post("/photos", photoController.createPhoto);
app.put("/photos/:id", photoController.updatePhoto);
app.delete("/photos/:id", photoController.deletePhoto);

app.get("/about", pageController.getAboutPage);
app.get("/add", pageController.getAddPage);
app.get("/edit/:id", pageController.getEditPage);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log("Project is up");
});
