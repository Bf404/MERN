

const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.getAll);
    app.get('/api/authors/:id', AuthorController.getOne);
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.put('/api/authors/update/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/delete/:id', AuthorController.deleteAuthor);
};