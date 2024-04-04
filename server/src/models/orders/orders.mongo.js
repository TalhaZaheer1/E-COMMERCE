const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    products:{
        type: [ {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            totalQuantity:Number,
            totalPrice:Number
        } ],
        required:true
    },
    subtotal: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    shippedDate: {
        type: Date,
    },
    paymentStatus:{
        type: String,
        required:true,
        default: "pending"
    },
    deliveryStatus:{
        type: String,
        default:"at the warehouse"
    },
    shippingAddress: {
        type: Object,
        required: true
    },
    billingAddress: {
        type: Object,
    },
    paymentMethod:{
        type:String,
        default:"card"
    },
    orderStatus:{
        type:String,
        default:"confirmed"
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        index:true
    }
},{timestamps:true});

module.exports = mongoose.model("Order",orderSchema);