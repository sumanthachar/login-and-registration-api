const Product = require('../models/product.model');

//Simple version, without validation or sanitation
var test = function (req, res) {
 res.send('Greetings from the Test controller!');
};

var product_create = function (req, res) {
    console.log("Adding product");
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send('Product Created successfully');
    });
};



var product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    });
};


var product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

var product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};
module.exports={test:test,product_create:product_create ,product_details:product_details ,product_update:product_update, product_delete:product_delete};

