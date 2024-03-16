const jwt = require("jsonwebtoken")
const {
    loginUser,
    registerUser,
    getCartById,
    addToCart,
    removeFromCart,
    clearCart
} = require("../../models/users/users.modal")

const TOKEN_SECRET = process.env.TOKEN_SECRET;

async function httpRegisterUser(req,res){
    console.log("yayyyyy")
    const { name,email,password,password_confirmation } = req.body
    if(!(name && email && password && password_confirmation))
        return res.status(400).json({
            error:"user data missing"
        })
    if(password !== password_confirmation)
        return res.status(400).json({
            error:"password not confirmed"
        })
    const user = await registerUser({name,email,password})
    if(user.isAlreadyPresent)
        return res.status(400).json({
            error:"user already registered"
        })
    if(user.databaseError)
        return res.status(400).json({
            error:"database error"
        })
    // const token = jwt.sign({ userId:user._id },TOKEN_SECRET,{ expiresIn:"1h" });
    res.json({
        user
    }) 
}

function httpLogoutUser(req,res){
    req.logout((err) => {
        if(err)
            return next(err)
        res.status(200).json({success:true})
    })
}

async function httpGetCartById(req,res){
    const userId = "65f1f9d96404b1f91a0452a1";
    const cart = await getCartById(userId);
    if(cart.notFound)
        return res.status(404).json({
            error:"user not found"
        })
    if(cart.databaseError)
        return res.status(400).json({
            error:"database error"
        })
    return res.json(cart)
}

async function httpAddToCart(req,res){
    const productId = req.params.productId;
    const userId = "65f1f9d96404b1f91a0452a1"
    const isUpdated = await addToCart(userId,productId);
    if(isUpdated.matchedCount === 0)
        return res.status(404).json({
            error:"user not found"
        })
    res.json({
        msg:"item added to cart"
    })
}

async function httpRemoveFromCart(req,res){
    const productId = req.params.productId;
    const userId = "65f1f9d96404b1f91a0452a1"
    const isUpdated = await removeFromCart(userId,productId);
    if(isUpdated.matchedCount === 0)
        return res.status(404).json({
            error:"user not found"
        })
    res.json({
        msg:"item removed from cart"
    })
}

async function httpClearCart(req,res){
    const userId = "65f1f9d96404b1f91a0452a1"
    const isUpdated = await clearCart(userId);
    if(isUpdated.matchedCount === 0)
        return res.status(404).json({
            error:"user not found"
        })
    res.json({
        msg:"cart is empty"
    })
}

module.exports = {
    httpRegisterUser,
    httpLogoutUser,
    httpGetCartById,
    httpAddToCart,
    httpRemoveFromCart,
    httpClearCart
}