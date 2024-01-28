const express = require("express");
const {
  fetchAllMovies,
  postMovie,
  getMovieById,
} = require("../controllers/movieController");
const router = express.Router();

router.get("/movies", fetchAllMovies);

router.get("/movie/:id", getMovieById);

router.post("/movie", postMovie);

module.exports = router;
