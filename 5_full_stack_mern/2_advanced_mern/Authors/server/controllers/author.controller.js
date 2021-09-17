const Author = require("../models/author.model");

module.exports = {

        //get all documents from the "authors" collection
    //and return an array of "author" documents (js objects)

    //get all documents from the "authors" collection and return an array of the "author" documents
    //GET
    findAllAuthors: (req, res) => {
        console.log("Displaying all authors!");
        //use the model to conect to the collection and find/return all documents
        Author.find({})  //find all documents.  don't filter anythin out
        .then((allAuthors) =>{
            res.json(allAuthors);
        })
        .catch((err) => {
            console.log("Get all authors failed");
            res.status(400).json(err);
        })
    },

    //CREATE - POST
    createNewAuthor:(req, res) => {
        Author.create(req.body)
        .then((newAuthor) => res.json(newAuthor))
        .catch((err) => {
            console.log("Create New Author failed");
            res.status(400).json(err)
        })
    },

    //READ - GET
    findOneAuthor: (req, res) => {
        //id will come to use from the param/url/route call   (using GET)         /api/authors/:id
        Author.findOne({ _id: req.params.id })      
        .then((oneAuthor) =>res.json(oneAuthor))
        .catch((err) => {
            console.log("Find One Author failed");
            res.status(400).json(err)            
        })
    },

    updateAuthor: (req, res) => {
        //id will come to use from the param/url/route call  (using PUT)          /api/authors/:id
        Author.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedAuthor => res.json({ updatedAuthor }))
            .catch((err) => {
                console.log("Update Author failed");
                res.status(400).json(err)            
            });
    },
    
    //DELETE - DELETE
    deleteAuthor: (req, res) => {
        //id will come to use from the param/url/route call   (using GET)         /api/authors/:id  similar to findOne, but change to delete
        Author.deleteOne({ _id: req.params.id })      
        .then((deletedAuthor) =>res.json(deletedAuthor))
        .catch((err) => {
            console.log("Delete Author failed");
            res.status(400).json(err)            
        })
    }
}