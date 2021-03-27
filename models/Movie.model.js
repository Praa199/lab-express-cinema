const mongoose = require("mongoose");

//create your schema here
let MovieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

//create your model here

let MovieModel = mongoose.model("myMovie", MovieSchema);

// do not forget to export your model
module.exports = MovieModel;
