const {Product} = require("../models/product.model");

module.exports = {
    index: (req, res) => {
        res.json({msg: "Welcome to Products API!"})
    },

    createProduct: (req, res) => {
        const {title, price, desc} = req.body;
        Product.create({
            title,
            price,
            desc
        })
        .then( product => res.json(product))
        .catch(err => res.json(err));
    },

    AllProducts: (req, res) => {
        Product.find()
        .then(allProducts => res.json({products: allProducts}))
        .catch(err => res.json({message: "somtething went wrong! " + err}));
    }

}