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
})

module.exports = mongoose.model("User",userSchema);