const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    products:{
        type: [ mongoose.Schema.Types.ObjectId ],
        required:true
    },
    orderPlacementDate: {
        type: Date,
        required:true
    },
    orderShippedDate: {
        type: Date,
        required:true
    },
    orderStatus:{
        type: String,
        required:true,
        default: "pending"
    },
    deliveryStatus:{
        type: String,
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: true
    },
    billingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: true
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Order",orderSchema);