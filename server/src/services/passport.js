const passport = require("passport");
const { Strategy } = require("passport-local");
const userModel = require("../models/users/users.mongo");
const { loginUser } = require("../models/users/users.modal");

passport.use("local", new Strategy({ usernameField:"email" },loginUser))
passport.serializeUser((user,done) => {
    done(null,user._id)
})// sets req.session.passport.user
passport.deserializeUser(async (userId,done) => { // gets userId from req.session.passport.user
    try{
        const user = userModel.findOne({ _id:userId },{ "__v":0,"password":0 })
        done(null,user) // populates req.user
    }catch(err){
        done(err)
    }
})
