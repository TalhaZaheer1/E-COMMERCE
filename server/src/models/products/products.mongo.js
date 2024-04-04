const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    images:{
        type: [String]
    },
    thumbnail:{
        type: String
    },
    sku:{
        type: Number,
        required:true,
        default: 0
    },
    category:{
        type: String,
        required: true,
        lowerCase: true
    },
    brand:{
        type: String,
        required: true,
        lowerCase: true
    },
    price:{
        type: Number,
        required: true
    },
    freeShipping:{
        type: Boolean,
        default: false
    },
    stock:{
        type:Number,
        required:true
    },
})

module.exports = mongoose.model("Product",productSchema);
