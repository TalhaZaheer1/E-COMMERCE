const express = require("express");
const { 
    httpGetAllProducts,
    httpGetProductById,
    httpAddNewProduct,
    httpUpdateProduct
 } = require("./products.controller")
const {
    isAuthenticatedAdmin,
    isAuthenticatedUser
}= require("../../services/utils")

const productsRouter = express.Router()

productsRouter.get("/",isAuthenticatedUser,httpGetAllProducts)
productsRouter.get("/:id",isAuthenticatedUser,httpGetProductById)
productsRouter.post("/add",isAuthenticatedAdmin,httpAddNewProduct)
productsRouter.put("/update/:id",isAuthenticatedAdmin,httpUpdateProduct)

module.exports = productsRouter