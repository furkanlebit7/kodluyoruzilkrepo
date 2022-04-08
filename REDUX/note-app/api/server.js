const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const { json } = require("body-parser");
const { nanoid } = require("nanoid");

dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use(json());

let notes = [
  {
    id: "J0nl7LXO5hVqvnQ3DZ210",
    color: "#233d4d",
    title: "Title 0",
    content:
      "0Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
  },
  {
    id: "J0nl7LXO5hVqvnQ3DZ211",
    color: "#fe7f2d",
    title: "Title 1",
    content:
      "1 Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
  },
  {
    id: "J0nl7LXO5hVqvnQ3DZ212",
    color: "#fcca46",
    title: "Title 2",
    content:
      "2 Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
  },
  {
    id: "J0nl7LXO5hVqvnQ3DZ213",
    color: "#a1c181",
    title: "Title 3",
    content:
      "3 Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
  },
];

app.get("/notes", (req, res) => res.send(notes));

app.post("/notes", (req, res) => {
  const note = {
    ...req.body,
    id: nanoid(),
  };
  notes.push(note);
  return res.send(note);
});

// app.patch("/todos/:id", (req, res) => {
//   const id = req.params.id;
//   const index = todos.findIndex((todo) => todo.id == id);
//   const completed = Boolean(req.body.completed);
//   if (index > -1) {
//     todos[index].completed = completed;
//   }
//   return res.send(todos[index]);
// });

app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  const index = notes.findIndex((note) => note.id == id);
  if (index > -1) {
    notes.splice(index, 1);
  }

  res.send(notes);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));
