const {Joke} = require("../models/jokes.model");

module.exports = {
  index: (req, res) =>{
    res.json({msg: "Welcome to the Jokes API!"});
  },

  allJokes: (req, res) => {
    Joke.find()
    .then(allJokes => res.json({ jokes: allJokes }))
    .catch(err => res.json({message: "somtething went wrong! " + err}));
  },

  oneJoke: (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then(thisJoke => res.json({joke: thisJoke}))
    .catch(err => res.json({message: "somtething went wrong! " + err}));
  },

  createJoke: (req, res) => {
    Joke.create(req.body)
    .then(newJoke => res.json({joke: newJoke}))
    .catch(err => res.json({message: "somtething went wrong! " + err}));
  },

  updateJoke: (req, res) => {
    Joke.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
      {new: true, runValidators: true})
    .then(thisJoke => res.json({joke: thisJoke}))
    .catch(err => res.json({message: "somtething went wrong! " + err}));
  },

  deleteJoke: (req, res) => {
    Joke.findOneAndDelete({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message: "somtething went wrong! " + err}));
  }
};