const PetController = require("../controllers/pet.controller");

//We are exporting an arrow function with a parameter of app that contains 5 statements.
//We import in server.js like this:  require("./routes/pet.routes")(app);

module.exports = (app) => {
    app.get('/api/pets', PetController.findAllPets);
    app.post('/api/pets', PetController.createNewPet);
    app.get('/api/pets/:id', PetController.findOnePet);
    app.put('/api/pets/:id', PetController.updatePet);
    app.delete('/api/pets/:id', PetController.deletePet);
}