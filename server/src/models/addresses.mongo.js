const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    fullAddress: {
        type: String,
        required: true    
    },
    country: {
        type: String,
        required: true    
    },
    state: {
        type: String,
        required: true    
    },
    zip: {
        type: String,
        required: true    
    },    
})

module.exports = mongoose.model("Address",addressSchema);