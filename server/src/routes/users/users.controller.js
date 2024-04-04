const jwt = require("jsonwebtoken")
const {
    loginUser,
    registerUser,
    getCart,
    addToCart,
    removeFromCart,
    clearCart
} = require("../../models/users/users.modal")
const { CustomError } = require("../../services/utils")

const TOKEN_SECRET = process.env.TOKEN_SECRET;

async function httpRegisterUser(req,res,next){
    const { name,email,password,password_confirmation } = req.body
    if(!(name && email && password && password_confirmation)){
        const error = new CustomError("missing input fields",400)
        next(error)
    }
    if(password !== password_confirmation){
        const error = new CustomError("password not confirmed",400)
        next(error)
    }
    const user = await registerUser({name,email,password})
    if(user.isAlreadyPresent){
        const error = new CustomError("user already registered",400)
        next(error)
    }
    if(user.databaseError){
        const error = new CustomError("database error",500)
        next(error)
    }
    // const token = jwt.sign({ userId:user._id },TOKEN_SECRET,{ expiresIn:"1h" });
    res.json({
        user
    }) 
}

function httpLogoutUser(req,res,next){
    req.logout((err) => {
        if(err)
            return next(err)
        res.status(200).json({success:true})
    })
}

async function httpGetCartById(req,res,next){
    console.log(req.session.cart)
    if(!req.session.cart){
        req.session.cart = {
            items: [],
            totalQuantity: 0,
            totalPrice: 0,
        }
        return res.json(req.session.cart)
    }
    const cart = req.session.cart
    // if(cart.notFound){
    //     const error = new CustomError("user not found",400)
    //     next(error)
    // }
    // if(cart.databaseError){
    //     const error = new CustomError("database error",500)
    //     next(error)
    // }
    return res.json(cart);
}

async function httpAddToCart(req,res,next){
    const productId = req.params.productId;
    const cart = req.session.cart
    const updatedCart = await addToCart(cart,productId);
    if(updatedCart.matchedCount === 0){
        const error = new CustomError("product not found",400)
        next(error)
    }
    req.session.cart = updatedCart
    res.json({
        msg:"item added to cart"
    })
}

async function httpRemoveFromCart(req,res,next){
    const productId = req.params.productId;
    const cart = req.session.cart
    const updatedCart = await removeFromCart(cart,productId);
    if(updatedCart.matchedCount === 0){
        const error = new CustomError("user not found",400)
        next(error)
    }
    req.session.cart = updatedCart
    res.json({
        msg:"item removed from cart"
    })
}

async function httpClearCart(req,res,next){
    // const userId = "65f1f9d96404b1f91a0452a1"
    // const isUpdated = await clearCart(userId);
    // if(isUpdated.matchedCount === 0){
    //     const error = new CustomError("user not found",400)
    //     next(error)
    // }
    const emptyCart = clearCart(req.session.cart)
    if(emptyCart)
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