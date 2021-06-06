const jokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get('/api', jokesController.index);
    app.get('/api/jokes', jokesController.allJokes);
    app.get("/api/jokes/:id", jokesController.oneJoke);
    // app.get('/api/jokes/random', )
    app.post('/api/jokes/new', jokesController.createJoke);
    app.put('/api/jpkes/:id', jokesController.updateJoke);
    app.delete('/api/jokes/:id', jokesController.deleteJoke);
}