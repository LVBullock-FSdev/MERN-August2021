//configure connection with mongo using mongoose
const mongoose = require("mongoose");
const dbName = "jokes";

//need to install software, walkthrough on the platform.  Test that connected to mongo in terminal

mongoose.connect("mongodb://localhost/" + dbName, {
    //allows us to use the most updated way with Mongo (no depreciation)
    useNewUrlParser: true,
    //allows us to use the latest
    useUnifiedTopology: true
})

    .then(() => {
            // what happens when successfully connected
        console.log(`Established connection to the ${dbName} database!`);
    })
    .catch((err) => {
            // what happens when connection not established.
        console.log(`ERROR - Not connected to the ${dbName} database!`);
        console.log(err);
    })