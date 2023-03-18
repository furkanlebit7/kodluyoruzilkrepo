const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ id: 1, title: "Blog title", description: "Blog description" });
  res.end();
});

const port = 3000;
app.listen(port, () => {
  console.log("Project is up");
});
