const { get } = require('mongoose');
const Category = require('../model/category.model');
const { MONGO_DB_CONFIG } = require('../config/app.config');

async function addCategory(params, callback) {
    
    // Validate input
    if (!params.categoryName) {
        console.log('Validation Error: Category name is required');
        return callback(null, {
            status: false,
            message: "Category name is required"
        });
    }

    try {
        // Validate schema before saving
        const model = new Category(params);
        
        // Validate the model
        await model.validate();

        // Save the model
        const data = await model.save();

        // Successful save
        callback({
            status: true,
            message: "Category added successfully",
            data: data
        }, null);
    } catch (err) {
        // Log detailed error
        console.error('Category Save Error:', err);

        // Handle validation errors
        if (err.name === 'ValidationError') {
            return callback(null, {
                status: false,
                message: Object.values(err.errors).map(e => e.message).join(', ')
            });
        }

        // Handle duplicate key error
        if (err.code === 11000) {
            return callback(null, {
                status: false,
                message: "Category name must be unique"
            });
        }

        // Generic error handling
        callback(null, {
            status: false,
            message: err.message || "An error occurred while adding the category"
        });
    }
}
async function getCategory(params, callback) {
    try {
        const categoryName = params.categoryName;
        const condition = categoryName 
            ? { categoryName: { $regex: new RegExp(categoryName), $options: "i" } } 
            : {};
        
        const perPage = Math.abs(params.pageSize) || MONGO_DB_CONFIG.PAGE_SIZE;
        const page = (Math.abs(params.page) || 1) - 1;
        
        const data = await Category.find(condition, "categoryName categoryImage")
            .skip(page * perPage)
            .limit(perPage);
        
        // Swap the order of parameters in the callback
        callback({
            status: true,
            message: "Categories fetched successfully",
            data: data
        }, null);
    } catch (err) {
        console.error('Category fetch error:', err);
        
        // Pass error as the second argument
        callback(null, err);
    }
}
async function getCategoryByID(params, callback) {
    const categoryID = params.catagoryId;
    console.log("the id is", categoryID);
    console.log("the params are", params);
    try {
        Category.findById(categoryID).then((data) => {
            if (!data) {
                return callback({
                    status: false,
                    message: "Category not found With this ID"
                }, "")
            }
            else callback({
                status: true,
                message: "Category fetched successfully",
                data: data
            }, null)
        })
    }
    catch (err) {
        console.error('Category fetch error:', err);
        callback({
        status: false,
        message: err.message
    }, "")
        // Pass error as the second argument
        
    }
    
}
async function upadteCategory(params, callback) {
    const categoryID = params.catagoryId;
     console.log("the params are", params);
    try {
       Category.findByIdAndUpdate(categoryID,params,{useFindAndModify: false}).then((data) => {
       if(!data){
           return callback({
               status: false,
               message: "Category not found With this ID"
           }, "")
       }
      else callback({
           status: true,
           message: "Category update successfully",
           data: data
       }, "")
       }) 
    }
    catch (err) {
        console.error('Category fetch error:', err);
        callback(null,{
            status: false,
            message: err.message     
      
    }, )
        // Pass error as the second argument
    }
   
}
async function deleteCategory(params, callback) {
   const categoryID = params.categoryID;
    Category.findByIdAndDelete(categoryID).then((data) => {
    if(!data){
        return callback({
            status: false,
            message: "Category not found With this ID"
        }, "")
    }
   else callback({
        status: true,
        message: "Category fetched successfully",
        data: data
    }, "")
}).catch((err) => {
    callback({
        status: false,
        message: err.message
    }, "")
})  
}

module.exports = {
    addCategory,
    getCategory,
    getCategoryByID,
    upadteCategory,
    deleteCategory
}