const v1Router = require("express").Router()

const { errorMiddleware } = require("../services/utils");
const productsRouter = require("./products/products.router")
const usersRouter = require("./users/users.router");

v1Router.use("/products",productsRouter)
v1Router.use("/user",usersRouter)

module.exports = v1Router