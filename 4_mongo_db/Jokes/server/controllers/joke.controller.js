const Joke = require("../models/joke.model");

module.exports = {


    //ALL DOCUMENTS - GET from the "jokes" collection and return and array of "joke" documents (js objects)
    findAllJokes: (req, res) => { //req short for request, res short for response
        console.log("Displaying all of the Jokes.");
        //use the model to connect to the collection and find/return all documents
        Joke.find({}) //find all documents.  don't filter anything out
        //allJokes will be the array of all Joke documents from our collection
        .then((allJokes) => {
            res.json({
                message:  "Listing all of the Jokes",
                allJokes: allJokes
            });
        })
        .catch((err) => {
            console.log("An Error Occurred - unable to get all jokes.");
            res.status(400).json(err);
        })
    },


    //CRUD
    //CREATE - POST
    addNewJoke: (req, res) => {
        // using the body from the request (in this case, req.body), we can create a new document
        Joke.create(req.body)
        .then((newJoke) => {
            console.log("A new joke was created.")
            res.json({
                message: "Successfully created.",
                newJoke: newJoke
            });
        })
        // this will run if there is an error
        .catch((err) => {
            console.log("An Error Occurred - unable to create this joke.");
            res.status(400).json(err);
        })
    },

    
    //RETRIEVE - GET
    findOneJoke: (req, res) => {
        // id will come from the param/url/route call      /api/jokes/:id
        Joke.findOne({_id: req.params.id})
        .then((oneJoke) => {
            console.log("The joke requested was found.")
            res.json({
                message:  "Here is the requested joke:",
                oneJoke: oneJoke
            });
        })
        .catch((err) => {
            console.log("An Error Occurred - unable to find this joke.");
            res.status(400).json(err);
        })
    },



    //UPDATE - PUT
    updateJoke: (req, res) => {
        // id will come from the param/url/route call      /api/jokes/:id
        Joke.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        .then(updatedJoke => {
            console.log("This joke was updated successfully.")
            res.json({
                message:  "Successfully updated.", 
                updatedJoke: updatedJoke
            });
        })
        .catch((err) => {
            console.log("An Error Occurred - unable to update this joke.");
            res.status(400).json(err);
        })
    },

    //DESTROY - DELETE 
    deleteJoke: (req, res) => {
        // id will come from the param/url/route call      /api/jokes/:id
        Joke.deleteOne({ _id: req.params.id })
        .then((deletedJoke) => {
            console.log("A joke was deleted successfully."),
            res.json({
                message: "Successfully deleted.",
                deletedJoke: deletedJoke
            });
        })
        .catch((err) => {
            console.log("An Error Occurred - unable to delete this joke.");
            res.status(400).json(err);
        })
    }
}