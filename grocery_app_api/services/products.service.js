const  Product  = require("../model/product.model");
const { Category } = require("../model/category.model");
const { MONGO_DB_CONFIG } = require("../config/app.config");
async function createProduct(params, callback) {
   
    try {
        if (!params.productName) {
            return callback({ message: "Product name is required" }, "");
            
        }
        if (!params.category) return callback({ message: "Category is required" }, "");

        const productModel = new Product(params);
        productModel.save().then((response) => {
            return callback(response, null);
        }).catch((err) => { return callback(err); });

    }
    catch (err) {
        return callback(err, "");
    }
}

async function getProducts(params,callback) { 
    const productName = params.productName;
    const categoryId = params.categoryId; 
    const condition = {};
    try {
        if (productName) {
        condition["productName"]={$regex:new RegExp(productName),$options:"i"};
        
    }
    if (categoryId) {
        condition["category"] =categoryId ;
    }
    let perPage = Math.abs(params.pageSize) || MONGO_DB_CONFIG.PAGE_SIZE;
    let page = (Math.abs(params.page) || 1) - 1;

        Product.find(condition, " categoryId productName productImage productShortDescription productDescription productPrice productSalePrice productSKU productType stockStatus").populate("category", "categoryName categoryImage").skip(page * perPage).limit(perPage).then((res) => {
          console.log("the data is",res);
          return  callback(res,null);
      }).catch((err) => {
          console.log("product fetch error:", err);
          return callback(err);
      })
    }
    catch (err) {
        console.error('Product fetch error:', err);
        return callback(err);
    }
}

async function getProductById(params,callback) { 
  
    const productId = params.productId ; 
    try {
        Product.findById(productId).populate("category","categoryName categoryImage").then((res) => {
        return  callback(res,null);
    }).catch((err) => {
        return callback(err);
    })
    }
    catch (err) {
        return callback(err);
    }
   
}
async function updateProduct(params,callback) { 
  
    const productId = params.productId ; 
    try {
          Product.findByIdAndUpdate(productId,params,{useFindAndModify: false}).then((res) => {
              if(!res){
                  return callback({ message: "Product not found" }, null);
                  
              }
              else return callback(res,null);
          }).catch((err) => {
              return callback(err);
          })
    }
    catch (err) {
        return callback(err);
    }   
   
}
async function deleteProduct(params,callback) { 
  
    const productId = params.productId ; 
    try {
       Product.findByIdAndDelete(productId).then((res) => {
           if(!res){
               return callback({ message: "Product not found" }, null);
               
           }
           else return callback(res,null);
       }).catch((err) => {
           return callback(err);
       })
   }
    catch (err) {
        return callback(err);
    }
   
}

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
}