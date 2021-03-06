const AuthorController = require("../controllers/author.controller");

//We are exporting an arrow function with a parameter of app that contains 5 statements.
//We import in server.js like this:  require("./routes/author.routes")(app);

module.exports = (app) => {
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.post('/api/authors', AuthorController.createNewAuthor);
    app.get('/api/authors/:id', AuthorController.findOneAuthor);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}