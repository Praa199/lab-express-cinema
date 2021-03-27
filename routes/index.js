const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("something");
  res.render("index");
});

const MovieModel = require("../models/Movie.model.js");

router.get("/film", (req, res) => {
  console.log("this is the request params==>>", req.params);
  MovieModel.find()
    .then((result) => {
      console.log("this is the result ==>>", result);
      res.render("../views/movies/movies.hbs", { result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/film/:id", (req, res) => {
  console.log("this is the request params==>>", req.params);
  let id = req.params.id;
  MovieModel.findById(id)
    .then((result) => {
      console.log("this is the result ==>>", result);
      res.render("../views/movies/movies-list.hbs", { result });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
