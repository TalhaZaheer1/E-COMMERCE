const { 
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProduct,
    deleteProduct
 } = require("../../models/products/products.modal");

async function httpGetAllProducts(req,res){
    const products = await getAllProducts()
    return res.json(products)
}

async function httpGetProductById(req,res) {
    const id  = req.params.id;
    if(!id)
        return res.status(400).json({
            error:"missing product id"
    })
    const product = await getProductById(id);
    if(product.matchedCount === 0)
        return res.status(404).json({
            error:"invalid product id"
    })
    return res.json(product)
}

async function httpAddNewProduct(req,res){
    const newProduct = req.body
    if(!(newProduct.name && newProduct.description && newProduct.images && newProduct.thumbnail && newProduct.sku
        && newProduct.category && newProduct.brand && newProduct.price))
        return res.status(400).json({
            error:"product details missing"
    })
    const createdProduct = await addNewProduct(newProduct)
    if(!createdProduct)
        return res.status(400).json({
            error:"product addition unsuccessful"
    })
    return res.json(createdProduct)
}

async function httpUpdateProduct(req,res){
    const productId = req.params.id;
    const newProduct = req.body;
    if(!productId || !newProduct)
        return res.ststus(400).json({
            error:"product details missing"
    })
    const isProductUpdated = await updateProduct(productId,newProduct);
    if(isProductUpdated.matchedCount !== 1)
    return res.status(404).json({
        error:"invalid product id"
})
    if(isProductUpdated.matchedCount === 1 && isProductUpdated.modifiedCount !== 1)
        return res.status(404).json({
            error:"nothing to update"
    })
    return res.json({
        msg:"product updated successfully"
    })
}

module.exports = { 
    httpGetAllProducts,
    httpGetProductById,
    httpAddNewProduct,
    httpUpdateProduct
}