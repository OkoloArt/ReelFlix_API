const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  year: Number,
  genres: [String],
  cast: [
    {
      name: String,
      image: String,
    },
  ],
  synopsis: String,
  posterImageUrl: String,
  trailerUrl: String,
  runtime: Number,
  rating: Number,
  language: String,
  country: String,
  imdbId: String,
  releaseDate: Date,
});

module.exports = mongoose.model("Movie", movieSchema);
