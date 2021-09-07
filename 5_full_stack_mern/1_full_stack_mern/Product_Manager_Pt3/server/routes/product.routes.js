const ProductController = require("../controllers/product.controller");

//exporting an arrow function with a parameter of app that contains the createNewProduct statement
//We import in server.js like this:  require("./routes/product.routes")(app);

module.exports = (app) => {
    // app.get('/api', ProductController.index);
    app.get('/api/products', ProductController.getAllProducts);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.getProduct);
}
