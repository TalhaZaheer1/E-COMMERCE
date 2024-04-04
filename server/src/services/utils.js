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

class CustomError extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this,this.contructor);
    }
}

// function asyncErrorHandler(func){
//     return (req,res,next) => {
//         func(req,res).catch(err => {
//             const error = new CustomError(err.message,500);
//             next(error)
//         })
//     }
// }

function errorMiddleware(error,req,res){
    res.status(error.statusCode).json({
        code:error.statusCode,
        message:error.message,
    })
}

module.exports = {
    isAuthenticatedAdmin,
    isAuthenticatedUser,
    CustomError,
    errorMiddleware
}
