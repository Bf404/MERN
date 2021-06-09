const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength: [
            2, "Name must be at least 2 characters!"
        ]
    },
    prefPos: {
        type: String
    }, 
    game1: {
        type: Number,
        default: 3
    },
    game2: {
        type: Number,
        default: 3
    },
    game3: {
        type: Number,
        default: 3
    }
    

}, {timestamps: true});

const Plyer = mongoose.model("Player", PlayerSchema);

module.exports = Plyer;