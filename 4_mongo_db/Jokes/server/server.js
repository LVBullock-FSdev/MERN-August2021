const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Fires the mongoose.connect statement to initialize the database connection
require("./config/mongoose.config");

// Import the jokes routes function from joke.routes.js file
require("./routes/joke.routes")(app);

app.listen(8000, () =>
console.log("Successfully connected to port 8000"));
