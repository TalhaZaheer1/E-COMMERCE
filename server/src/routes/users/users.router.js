const userRouter = require("express").Router();
const passport = require("passport");
const {
    httpRegisterUser,
    httpLogoutUser,
    httpGetCartById,
    httpAddToCart,
    httpRemoveFromCart,
    httpClearCart
} = require("./users.controller");
const {
    isAuthenticatedUser
} = require("../../services/utils");

userRouter.post("/login",passport.authenticate("local",{ failureMessage:"invalid pass" }),(req,res) => {
    res.json({user:req.user})
});// populates req.session.passport.user
userRouter.post("/register", httpRegisterUser);
userRouter.get("/logout", httpLogoutUser);
userRouter.get("/cart"/*, isAuthenticatedUser*/, httpGetCartById);
userRouter.post("/cart/add/:productId"/*, isAuthenticatedUser*/, httpAddToCart);
userRouter.post("/cart/remove/:productId"/*, isAuthenticatedUser*/, httpRemoveFromCart);
userRouter.get("/cart/clear"/*, isAuthenticatedUser*/, httpClearCart);

module.exports = userRouter;