const Player = require('../models/player.model');

module.exports = {
    index: (req, res) => {
        res.json("Welcome to Team Manager API");
    },

    getAll: (req, res) => {
        Player.find()
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.status(400).json(err))
    },
    getOne: (req, res) => {
        Player.findOne({_id: req.params.id})
        .then(player => res.json(player))
        .catch( err => res.status(400).json(err))
    },

    create: (req, res) => {
        Player.create(req.body)
        .then( player => res.json(player))
        .catch(err => res.status(400).json(err));
    },

    update: (req, res) => {
        Player.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch( err => res.status(400).json(err))
    },
    
    delete: (req, res) => {
        Player.deleteOne({ _id: req.params.id})
            .then(delConfirm => res.json(delConfirm))
            .catch( err => res.status(400).json(err))
    }
}
