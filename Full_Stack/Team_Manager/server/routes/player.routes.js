
const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.get('/api', PlayerController.index);
    app.get('/api/players', PlayerController.getAll);
    app.get('/api/players/:id', PlayerController.getOne);
    app.post('/api/players/new', PlayerController.create);
    app.put('/api/players/update/:id', PlayerController.update);
    app.delete('/api/players/delete/:id', PlayerController.delete);
};