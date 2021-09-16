//SET UP SERVER IN THIS ORDER,  ORDER MATTERS.

const express = require("express"); //allows us to connect and set up the server
const cors = require('cors'); //allows us to get information from the frontend; if not here, will have a lot of errors  
const app = express(); //ensure that the express method is running

app.use(express.json());
//allows express to pass json easily from the frontend to the backend
app.use(express.urlencoded({ extended: true }));  
app.use(cors({
     //allow from this origin of localhost:3000, which is the frontend
    origin: "http://localhost:3000" 
})) 

//allow mongoose.config to run
//comment out these 2 lines until needed
//--after we have set up the mongoose.config.js file
require('./config/mongoose.config');

//--after setting this in the product.routes.js file
// require('./routes/product.routes')(app);


//--allows express to listen at 8000 port
app.listen(8000, () => 
//successful connection will show this message in the terminal
console.log("You have successfully connected to port 8000"));

//do not have to export this
