const express = require('express'); //import the express library from the node_modules and assign it to the express variable to be used
const app = express(); //start up the express application and start using express
const faker = require('faker'); //imports the faker library  -- npm install faker

// Configure your server here
app.use(express.json());
app.use(express.urlencoded({  //allows condensing the url as a usable request
    extended: true
}));


// Faker Assignment - Use 2 javascript libraries to create a simple API that generates a User and/or Company depending on the route 

const createUser = () => {
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName:  faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName() + " " + faker.company.companySuffix(),
        street:  faker.address.streetAddress(),
        city:  faker.address.cityName(),
        state:  faker.address.stateAbbr(),
        zipCode:  faker.address.zipCode(),
        country:  faker.address.country(),

    };
    return newCompany;
}

// Create an api route "/api/users/new" that returns a new user
app.get("/api/users/new", (request, response) => {
    const newUser = createUser();
    console.log(newUser);

    response.json({ 
        message: "API route '/api/users/new'",
        user: newUser  //returns the data from createUser() above
    })
})

// Create an api route "/api/companies/new" that returns a new company
app.get("/api/companies/new", (request, response) => {
    const newCompany = createCompany();
    console.log(newCompany);

    response.json({ 
        message: "API route '/api/companies/new'",
        company: newCompany  //returns the whole product from above createProduct() Lines 13-20
    })
})

// Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company", (request, response) => {
    const user = createUser();
    const company = createCompany();
    console.log(user);
    console.log(company);

    response.json({ 
        message: "API route '/api/user/company'",
        userId: user._id, //returns the user's Id via user on line 64,
        userName: user.firstName + " " + user.lastName,  //returns the user's first and last name via user on line 64,
        userPhone: user.phoneNumber,  //returns the user's phone number via user on line 64,
        userEmail: user.email,  //returns the user's email via user on line 64,
        userPassword: user.password,  //returns the user's password via user on line 64,
        companyId: company._id,
        companyName: company.name, //returns the user's company name via company on line 65,
        companyAddress: company.street + ", " + company.city + ", " + company.state + "  " + company.zipCode, //returns the user's company address via company on line 65
        companyCountry: company.country//returns the user's company country location via company on line 65
    })
})

//this is USUALLY the last line of your server.js
//  Start the server listening AFTER we create ALL routes
//  and configure the server for json and url encoding
// start your server listening for requests

app.listen(8000, () => console.log("Listening on port 8000"));  //tells the app to listen on port 8000 then print to the console "Listening on port 8000"** (run nodemon server.js to see the console.log).  If it returns, means that the server started up.


//**USE nodemon server.js