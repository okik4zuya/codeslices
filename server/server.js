const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const notes = require("./data/notes");
const connectDB = require("./config/db");

const app = express();
app.use(cors());

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);

  res.send(note);
});

app.listen(
  process.env.PORT,
  console.log(`Server started on port ${process.env.PORT}`)
);
