const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minlength:8
    },
    phoneNumber:{
        type: Number,
    },
    role: String,
    cart:{
        items:{
            type: [ mongoose.Schema.Types.ObjectId ],
            ref: "Product"
        },
        totalQuantity:Number,
        totalPrice:Number
    }
})

module.exports = mongoose.model("User",userSchema);