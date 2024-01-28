const mongoose = require("mongoose");
const Movie = require("../model/Movie");

const fetchAllMovies = async (req, res) => {
  try {
    const movieList = await Movie.find();
    res.status(200).json(movieList);
  } catch (error) {
    console.log(`Error retrieving movies; ${error}`);
    res.status(404).json({ error });
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).exec();
    res.status(200).json(movie);
  } catch (error) {
    console.log(`Erron retreiving movie with particular id: ${req.params.id}`);
    res.status(404).json({ error });
  }
};

const postMovie = async (req, res) => {
  const newMovie = new Movie(req.body);
  try {
    await newMovie.save();
    res.status(200).json({ message: "Movie uploaded successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { fetchAllMovies, postMovie, getMovieById };
