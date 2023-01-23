const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to my favourite movie list");
});

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const getMovie = (req, res) => {
  const urlId = Number(req.params.theId);
  const unikMovie = movies.find((theMovie) => theMovie.id === urlId);
  if (unikMovie) {
    res.status(200).json(unikMovie);
  } else {
    res.status(404).send("Not found");
  }
};

app.get("/api/movie/:theId", getMovie);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`server is listening on ${port}`);
  }
});
