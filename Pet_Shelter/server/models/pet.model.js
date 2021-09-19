const mongoose = require ("mongoose");

//set up schema
const PetSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required."],
        minLength:[3, "Name must be at least 3 characters long!"]
    },

    type: {
        type: String,
        required: [true, "Type is required."],
        minLength:[3, "Type must be at least 3 characters long!"]
    },

    description: {
        type: String,
        required: [true, "Description is required."],
        minLength:[3, "Description must be at least 3 characters long!"]
    },

    //Optional, A pet may have between 0 and 3 skills
    skill1: {
        type: String
    },

    skill2: {
        type: String
    },

    skill3: {
        type: String
    },
//timestamps automatically create "createdAt" and "updatedAt" date and time info for each document
//every time a document is updated, it will change the "updatedAt"
}, { timestamps: true });

//Model is a combination of the collectionName and Schema
//Name will be collection name that is held in the db
//schema is going to be singular of what will show as plural in the db
const Pet = mongoose.model("Pet", PetSchema);
//This returns a product model with the collection name and that schema

module.exports = Pet;