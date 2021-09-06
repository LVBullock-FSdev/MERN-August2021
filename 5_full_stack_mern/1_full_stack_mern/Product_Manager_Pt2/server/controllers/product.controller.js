const Product = require("../models/product.model");


//This works

//Not sure if index is needed???
// module.exports.index = (request, response) => {
//     response.json({
//         message:  "This is the Product Manager Pt 2"
//     });
// }

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })

        .then(createProduct => {
            console.log("A new product was added to the database.")
            //This response.json seems to function properly for front and backend.
            response.json(createProduct)
            //When I use the response.json below, frontend returns props.products.map is not a function
            // response.json({
            //     message:  "New product added.",
            //     createProduct
            // });
        })
        .catch(err => response.json(err));
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(allProducts => {
            console.log("Listing all of the Products.");
            //This response.json seems to function properly for front and backend.
            response.json(allProducts)
            //When I the response.json below, frontend returns props.products.map is not a function
            // response.json({
            //     message:  "All products.",
            //     allProducts: allProducts
            // });
        })
        .catch(err => response.json(err))
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(oneProduct => {
            console.log("Displaying details for one Product.")
            //This response.json seems to function properly for front and backend.
            response.json(oneProduct)
            //When I the response.json below, frontend returns props.products.map is not a function
            // response.json({
            //     message:  "Details for one product.",
            //     oneProduct: oneProduct
            // });
        })
        .catch(err => response.json(err))
}


//************NOTES & QUESTIONS BELOW********************************** */

// module.exports = {
//     index: (req, res) => {
//         res.json( {
//             message: "This is the Product Manager Pt 2"
//         })
//     }
// }


//******When I use this (according to recording, with all between module.exports) app crashes*******
// module.exports = {

// //     //ALL DOCUMENTS - GET from the "products" collection and return and array of "product" documents (js objects)
//     findAllProducts: (req, res) => { //req short for request, res short for response
//         console.log("Displaying all of the Products.");
//         //use the model to connect to the collection and find/return all documents
//         Product.find({}) //find all documents.  don't filter anything out
//         //allProducts will be the array of all Joke documents from our collection
//         .then((allProducts) => {
//             res.json({
//                 message:  "Listing all of the Products",
//                 allProducts: allProducts
//             });
//         })
//         .catch((err) => {
//             console.log("An Error Occurred - unable to get all Products.");
//             res.status(400).json(err);
//         })
//     },


//     //CREATE - POST
//     createProduct: (req, res) => {
//         // using the body from the request (in this case, req.body), we can create a new document
//         Product.create(req.body)
//         .then((newProduct) => {
//             console.log("A new Product was created.")
//             //If you have multiple statements, ES6 requires opening a curly brace statements inside
//             res.json({
//                 message: "Product successfully created.",
//                 newProduct: newProduct
//             });
//         })
//         // this will run if there is an error
//         .catch((err) => {
//             console.log("An Error Occurred - unable to create this Product.");
//             res.status(400).json(err);
//         })
//     },


//     //RETRIEVE - GET
//     findOneProduct: (req, res) => {
//         // id will come from the param/url/route call      /api/products/:id
//         Product.findOne({_id: req.params.id})
//         .then((oneProduct) => {
//             console.log("The Product requested was found.")
//             res.json({
//                 message:  "Here is the requested Product:",
//                 oneProduct: oneProduct
//             });
//         })
//         .catch((err) => {
//             console.log("An Error Occurred - unable to find this Product.");
//             res.status(400).json(err);
//         })
//     }
// }




// ********When I use this (as on the platform) consoles TypeError: props.products.map is not a function********
// module.exports = {
//     index: (req, res) => {
//         res.json( {
//             message: "This is the Product Manager Pt 2"
//         })
//     },

//     //ALL DOCUMENTS - GET from the "products" collection and return and array of "product" documents (js objects)
//     findAllProducts: (req, res) => { //req short for request, res short for response
//         console.log("Displaying all of the Products.");
//         //use the model to connect to the collection and find/return all documents
//         Product.find({}) //find all documents.  don't filter anything out
//         //allProducts will be the array of all Joke documents from our collection
//         .then((allProducts) => {
//             res.json({
//                 message:  "Listing all of the Products",
//                 allProducts: allProducts
//             });
//         })
//         .catch((err) => {
//             console.log("An Error Occurred - unable to get all Products.");
//             res.status(400).json(err);
//         })
//     },

//     //CREATE - POST
//     createProduct: (req, res) => {
//         // using the body from the request (in this case, req.body), we can create a new document
//         Product.create(req.body)
//         .then((newProduct) => {
//             console.log("A new Product was created.")
//             //If you have multiple statements, ES6 requires opening a curly brace statements inside
//             res.json({
//                 message: "Product successfully created.",
//                 newProduct: newProduct
//             });
//         })
//         // this will run if there is an error
//         .catch((err) => {
//             console.log("An Error Occurred - unable to create this Product.");
//             res.status(400).json(err);
//         })
//     },


//     //RETRIEVE - GET
//     findOneProduct: (req, res) => {
//         // id will come from the param/url/route call      /api/products/:id
//         Product.findOne({_id: req.params.id})
//         .then((oneProduct) => {
//             console.log("The Product requested was found.")
//             res.json({
//                 message:  "Here is the requested Product:",
//                 oneProduct: oneProduct
//             });
//         })
//         .catch((err) => {
//             console.log("An Error Occurred - unable to find this Product.");
//             res.status(400).json(err);
//         })
//     },
// }



