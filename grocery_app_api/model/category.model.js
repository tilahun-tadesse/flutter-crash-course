

const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
   
    categoryName: {
        type: String,
        require: true,
        unique: true

    },
    categoryDescription: {
        type: String,
        require: false,
             
    },
    categoryImage: {
        type: String,
        require: false,
    },
},
        {
            toJSON: {
                transform: function (doc, ret) {
                    ret.categoryId=ret._id.toString();
                    delete ret._id;
                    delete ret.__v;
                   
                }
            }
        
       
})


const Category = mongoose.model('Category', categorySchema)

module.exports = Category
