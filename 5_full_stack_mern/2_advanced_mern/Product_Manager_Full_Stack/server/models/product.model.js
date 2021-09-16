const mongoose = require ("mongoose");

//set up schema
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "A title is required."],
        minLength:[5, "Title must be at least 5 characters long!"]
    },
    price: { 
        type: Number,
        required: [true, "The price is required."]
     },

    description: { 
        type: String,
        required: [true, "A description is required."],
        minLength: [5, "Description must be at least 5 characters long!"]
    },
    //see MERN-PT-AUG2021:Full-Stack App - Part 1 (Back-end) video for adding image, rating, and suitableForKids
    image: {
        type: String,
        required: [true, "Must add an image!"]

    
    }

//timestamps automatically create "createdAt" and "updatedAt" date and time info for each document
//every time a document is updated, it will change the "updatedAt"
}, { timestamps: true });


//Model is a combination of the collectionName and Schema
//Name will be collection name that is held in the db
//schema is going to be singular of what will show as plural in the db
const Product = mongoose.model("Product", ProductSchema);
//This returns a product model with the collection name and that schema

module.exports = Product;