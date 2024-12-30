const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        require: true,
        unique: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    productShortDescription: {
        type: String,
        required: true,

    },
    productDescription: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productSalePrice: {
        type: Number,
        required: true,
        default: 0
    },

    productImage: {
        type: String,
        required: true,
    },
    productSKU: {
        type: String,
        required: true,
    },
    productType: {
        type: String,
        required: true,
    },
    stockStatus: {
        type: String,
        required: true,
    },
},
    {
        toJSON: {
            transform: function (doc, ret) {
                ret.productId = ret._id.toString();
                delete ret._id;
                delete ret.__v;
            },
        }
    });
mongoose.model('Product', productSchema)
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
