const mongoose = require ("mongoose");

//set up schema
const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "A name is required."],
        minLength:[3, "Name must be at least 3 characters long!"]
    },


//timestamps automatically create "createdAt" and "updatedAt" date and time info for each document
//every time a document is updated, it will change the "updatedAt"
}, { timestamps: true });


//Model is a combination of the collectionName and Schema
//Name will be collection name that is held in the db
//schema is going to be singular of what will show as plural in the db
const Author = mongoose.model("Author", AuthorSchema);
//This returns a product model with the collection name and that schema

module.exports = Author;


//see MERN-PT-AUG2021:Full-Stack App - Part 1 (Back-end) video