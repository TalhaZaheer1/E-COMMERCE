function isAuthenticatedUser(req,res,next){
    if(req.isAuthenticated())
        return next()
    return res.status(401).json({
        error:"Log In required"
    })

}

function isAuthenticatedAdmin(req,res,next){
    if(req.isAuthenticated() && req.user.role === "admin")
        return next()
    return res.status(401).json({
        error:"you dont have permissions to access this resource"
    })
}

module.exports = {
    isAuthenticatedAdmin,
    isAuthenticatedUser
}