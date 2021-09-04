const mongoose = require("mongoose");

// create a template of our document in our collections.  this template is called a Schema
const JokeSchema = new mongoose.Schema({
    setup: { type: String },
    punchLine: { type: String }
}, {timestamps: true});  //Automatically generates createdAt (when item first created) and updatedAt (last time item was modified)

//Model is a combination of the collectionName (Joke) and SchemaName (JokeSchema)
//Name will be collection name that's held in the db
//schema is going to be the singular of what will show as plural in the db
const Joke = mongoose.model("Joke", JokeSchema);
//This returns a cartoon model with the collection name and that schema

module.exports = Joke;