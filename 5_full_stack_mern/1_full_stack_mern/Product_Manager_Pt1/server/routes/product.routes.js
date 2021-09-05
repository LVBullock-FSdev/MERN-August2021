const ProductController = require("../controllers/product.controller");

//exporting an arrow function with a parameter of app that contains the createNewProduct statement
//We import in server.js like this:  require("./routes/product.routes")(app);

module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/api/products/create', ProductController.createProduct);
}
