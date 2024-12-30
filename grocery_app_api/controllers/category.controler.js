const categoriesService = require("../services/category.service");
const upload = require("../middleware/category.uploads");
const { category } = require("../model/category.model");
const create = (req, res, next) => {
    upload(req, res, function (err) {
        if (err) {
            console.error('Upload Error:', err);
            return next(err);
        }

        // Fix the path handling
        const path = req.file ? req.file.path.replace(/\\/g, '/') : null;
        
        const model = {
            categoryName: req.body.categoryName,
            categoryImage: path ? "/" + path : "",
            categoryDescription: req.body.categoryDescription
        };

        // Log the model before passing to service
        console.log('Category Create Model:', model);

        categoriesService.addCategory(model, (response, error) => {
            // Note the swap in parameter order
            console.log('Add Category Response:', response);
            console.log('Add Category Error:', error);

            if (error) {
                console.error('Add Category Service Error:', error);
                return next(error);
            }

            return res.status(200).json({
                status: true,
                message: "Category added successfully",
                data: response
            });
        });
    });
};

const getAll = (req, res, next) => {
    // Log the incoming query parameters for debugging
    console.log("Request Query:", req.query);

    var model = {
        categoryName: req.query.categoryName,
        pageSize: req.query.pageSize ? parseInt(req.query.pageSize) : undefined,
        page: req.query.page ? parseInt(req.query.page) : undefined
    };

    categoriesService.getCategory(model, (response, error) => {
        // Note the order of parameters is swapped
        if (error) {
            console.error("Error in getCategory:", error);
            return next(error);
        }
        
        // If response is successful
        return res.status(200).json({
            status: true,
            message: "Categories fetched successfully", // Corrected message
            data: response
        });
    });
};

const getByID = (req, res, next) => {
    
            
    var model = {
        catagoryId: req.params.id
    }
        console.log("the id is from the controller",model.catagoryId);
    categoriesService.getCategoryByID(model, (response, error) => {
        if (error) {
            return next(error)
        }
        else {
            return res.status(200).send({
                status: true,
                message: "Category getByID successfully",
                data: response
            })
        }
    })
    

}

const update=(req,res,next)=>{
    upload(req, res, function (err) {
        if (err) {
           next(err)
        } else {
            const path = req.file != undefined ? req.file.path(/\\/g, '/') : null
            var model={
                catagoryId: req.params.id,
                categoryName: req.body.categoryName,
                categoryImage: path != "" ? "/"+path : "",
                categoryDescription: req.body.categoryDescription
            }
        }
        categoriesService.upadteCategory(model, (response, error) => {
            if (error) {
                return next(error)
            }
            else {
                return res.status(200).send({
                    status: true,
                    message: response.message,
                    data: response
                })
            }
        })
      
    })
}
const deleteOne= (req, res, next) => {
    
            
    var model = {
        catagoryId: req.params.id
    }
        
    categoriesService.deleteCategory(model, (error, response) => {
        if (error) {
            return next(error)
        }
        else {
            return res.status(200).send({
                status: true,
                message: "Category added successfully",
                data: response
            })
        }
    })
    

}
module.exports = {
    create,
    getAll,
    getByID,
    update,
    deleteOne
}