const mongoose = require("mongoose");

//set up the schema
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: [true, "The title is required!"],
        // minLenth: [2, "Title must be at least 2 characters long!"]
    },

    price: { 
        type: Number,
        // required: [true, "The price is required!"]
    },

    description: { 
        type: String,
        // required: [true, "A description is required!"],
        // minLength: [5, "Description must me at least 5 characters long!"]
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

