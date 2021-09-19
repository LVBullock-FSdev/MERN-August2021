const Pet = require("../models/pet.model");

module.exports = {

    //get all documents from the "pets" collection
    //and return an array of "pet" documents (js objects)

    //get all documents from the "pets" collection and return an array of the "pet" documents
    //GET
    findAllPets: (req, res) => {
        console.log("Displaying all pets!");
        //use the model to conect to the collection and find/return all documents
        Pet.find({})  //find all documents.  don't filter anythin out
        .then((allPets) =>{
            res.json(allPets);
        })
        .catch((err) => {
            console.log("Get all pets failed");
            res.status(400).json(err);
        })
    },

    //CRUD (Create, Read, Update, Destroy)
    //CREATE - POST  (using POST)
    createNewPet:(req, res) => {
        Pet.create(req.body)
        .then((newPet) => res.json(newPet))
        .catch((err) => {
            console.log("Create New Pet failed");
            res.status(400).json(err)
        })
    },
    
    //READ - GET
    findOnePet: (req, res) => {
        //id will come to use from the param/url/route call   (using GET)         /api/pets/:id
        Pet.findOne({ _id: req.params.id })      
        .then((onePet) =>res.json(onePet))
        .catch((err) => {
            console.log("Find One Pet failed");
            res.status(400).json(err)            
        })
    },
    
    //UPDATE - PUT
    updatePet: (req, res) => {
        //id will come to use from the param/url/route call  (using PUT)          /api/pets/:id
        Pet.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedPet => res.json({ updatedPet }))
            .catch((err) => {
                console.log("Update Pet failed");
                res.status(400).json(err)            
            });
    },
    
    //DESTROY - DELETE
    deletePet: (req, res) => {
        //id will come to use from the param/url/route call   (using DELETE)         /api/pets/:id  similar to findOne, but change to delete
        Pet.deleteOne({ _id: req.params.id })      
        .then((deletedPet) =>res.json(deletedPet))
        .catch((err) => {
            console.log("Delete Pet failed");
            res.status(400).json(err)            
        })
    }    
}