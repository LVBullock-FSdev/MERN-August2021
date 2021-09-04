const JokeController = require("../controllers/joke.controller");

//Exporting an arrow funcation with a parameter of app that contains 5 statements.
//We import in server.js like this: require("./routes/joke.routes")(app);

module.exports = (app) => {
    //ALL DOCUMENTS - GET
    app.get('/api/jokes', JokeController.findAllJokes);

    //CRUD    
    //CREATE - POST
    //if data is being sent to the server to create something new, we use a POST request
    app.post('/api/jokes/create', JokeController.addNewJoke);

    //RETRIEVE - GET
    //Make sure this goes second (with the params) because it will search this one by id
    app.get('/api/jokes/:id', JokeController.findOneJoke);


    //UPDATE - PUT
    app.put('/api/jokes/update/:id', JokeController.updateJoke);

    //DESTROY - DELETE
    app.delete('/api/jokes/delete/:id', JokeController.deleteJoke);
}