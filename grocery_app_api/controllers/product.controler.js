const productService = require("../services/products.service");
const upload = require("../middleware/product.uploads");

const createProduct = (req, res, next) => {
    upload(req, res, function (err) {
        if (err) {
            console.error('Upload Error:', err);
            return next(err);
        }
        else {
            const path = req.file ? req.file.path.replace(/\\/g, '/') : null;
            var model = {
                productName: req.body.productName,
                category: req.body.category,
                productShortDescription: req.body.productShortDescription,
                productDescription: req.body.productDescription,
                productPrice: req.body.productPrice,
                productSalePrice: req.body.productSalePrice,
                productSKU: req.body.productSKU,
                productType: req.body.productType,
                stockStatus: req.body.stockStatus,
                productImage: path? "/" + path : "" 
            }
            productService.createProduct(model, (response, error) => {
                if (error) {
                    return next(error)
                }
                else {
                    return res.status(200).send({
                        status: true,
                        message: "Product added successfully",
                        data: response
                    })
                }
            })
        }
    })
}

const getAllProducts = (req, res, next) => {
    var model = {
        productName: req.query.productName,
        categoryId: req.query.categoryId,
        pageSize: req.query.pageSize,
        page: req.query.page
    }
    productService.getProducts(model,(response, error) => {
        if (error) {
            return next(error)
        }
        else {
            return res.status(200).send({
                status: true,
                message: "Product get successfully",
                data: response
            })
        }
    })
    
}

const getOneProduct = (req, res, next) => {
        var model = {
            productId: req.params.id
        }
        productService.getProductById(model, (response, error) => {
            if (error) {
                return next(error)
            }
            else {
                return res.status(200).send({
                    status: true,
                    message: "Product added successfully",
                    data: response
                })
            }
        })
}
    
const updateProduct = (req, res, next) => {
    upload(req, res, function (err) {
        if (err) {
            console.error('Upload Error:', err);
            return next(err);
        }
        else {
            const path = req.file ? req.file.path.replace(/\\/g, '/') : null;
            var model = {
                productId: req.params.id,
                productName: req.body.productName,
                category: req.body.category,
                productShortDescription: req.body.productShortDescription,
                productDescription: req.body.productDescription, 
                productPrice: req.body.productPrice,
                productSalePrice: req.body.productSalePrice,
                productSKU: req.body.productSKU,
                productType: req.body.productType,
                stockStatus: req.body.stockStatus,
                productImage: path? "/" + path : ""
            }
            productService.updateProduct(model, (response, error) => {
                if (error) {
                    return next(error)
                }
                else {
                    return res.status(200).send({
                        status: true,
                        message: "Product added successfully",
                        data: response
                    })
                }
            })
        }
    })
}
       
const deleteProduct = (req, res, next) => {
    var model = {
        productId: req.params.id
    }
    productService.deleteProduct(model, (error, response) => {
        if (error) {
            return next(error)
        }
        else {
            return res.status(200).send({
                status: true,
                message: "Product added successfully",
                data: response
            })
        }
    })
}

module.exports = {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}