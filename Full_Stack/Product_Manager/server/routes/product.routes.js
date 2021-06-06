const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get('/api/', ProductController.index);
    app.post('/api/products/new', ProductController.createProduct);
    app.get('/api/products', ProductController.AllProducts);
    app.get('/api/products/:id', ProductController.getProduct);
}