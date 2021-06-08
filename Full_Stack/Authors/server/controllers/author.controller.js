const Author = require('../models/author.model');

module.exports = {

    index: (req, res) => {
        res.json("Welcome to Authors API");
    },

    getAll: (req, res) => {
        Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.status(400).json(err))
    },
    getOne: (req, res) => {
        Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch( err => res.status(400).json(err))
    },

    createAuthor: (req, res) => {
        Author.create(req.body)
        .then( author => res.json(author))
        .catch(err => res.status(400).json(err));
    },

    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch( err => res.status(400).json(err))
    },
    
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id})
            .then(delConfirm => res.json(delConfirm))
            .catch( err => res.status(400).json(err))
    }
}
