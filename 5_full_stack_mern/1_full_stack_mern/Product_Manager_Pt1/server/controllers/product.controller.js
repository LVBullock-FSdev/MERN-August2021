const Product = require("../models/product.model");

module.exports = {
    index: (req, res) => {
        res.json( {
            message: "This is the Product Manager Pt 1"
        })
    },

    //CREATE - POST
    createProduct: (req, res) => {
        // using the body from the request (in this case, req.body), we can create a new document
        Product.create(req.body)
        .then((newProduct) => {
            console.log("A new Product was created.")
            //If you have multiple statements, ES6 requires opening a curly brace statements inside
            res.json({
                message: "Product successfully created.",
                newProduct: newProduct
            });
        })
        // this will run if there is an error
        .catch((err) => {
            console.log("An Error Occurred - unable to create this Product.");
            res.status(400).json(err);
        })
    },
}
