const productsModel = require("./products.mongo");

// async function createSearchIndex(){
//     const indexes = await productsModal.listIndexes()
//     for(let i = 0;i<indexes.length;i++){
//         if(indexes[i].name === "indexS")
//             return
//     }
//     const searchIndex = await productsModal.createSearchIndex(
//         { name: 'test', definition: { mappings: { dynamic: true } } }
//     )
//     console.log(searchIndex)
// }
// {
//     name:"indexS",
//     definition:{
//         mappings:{
//             dynamic:false,
//             fields:{
//                 name:{
//                  type: String
//                 }       
//             }
//         }
//     }
// }

async function getAllProducts(){
    return await productsModel.find({})
}

async function getProductById(id){
    try{
    return await productsModel.findById(id)
    }catch(err){
        return { matchedCount:0 }
    }
}

async function addNewProduct(product){
    return await productsModel.create(product)
}

async function updateProduct(id,product){
    try{
    const updated = await productsModel.updateOne({_id:id},product)
    return updated
    }catch(err){
        return { matchedCount: 0 }
    }
}

async function deleteProduct(id){
    return await productsModel.findByIdAndDelete(id)
}

async function searchProductByName(name){
    return await productsModel.find({$text:{$search:name}})
}


module.exports = {
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProduct,
    deleteProduct,
    searchProductByName
    // createSearchIndex
}