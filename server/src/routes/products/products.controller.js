const {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProduct,
  deleteProduct,
} = require("../../models/products/products.modal");
const { CustomError } = require("../../services/utils");

async function httpGetAllProducts(req, res) {
  const products = await getAllProducts();
  return res.json(products);
}


async function httpGetProductById(req, res, next) {
  const id = req.params.id;
  if (!id) {
    const error = new CustomError("missing product id", 400);
    next(error);
  }
  const product = await getProductById(id);
  if (product.matchedCount === 0) {
    const error = new CustomError("invalid product id", 404);
    next(error);
  }
  return res.json(product);
}

async function httpAddNewProduct(req, res, next) {
  const newProduct = req.body;
  if (
    !(
      newProduct.name &&
      newProduct.description &&
      newProduct.images &&
      newProduct.thumbnail &&
      newProduct.sku &&
      newProduct.category &&
      newProduct.brand &&
      newProduct.price
    )
  ) {
    const error = new CustomError("product details missing", 400);
    next(error);
  }
  const createdProduct = await addNewProduct(newProduct);
  if (!createdProduct){
    const error = new CustomError("product addition failed",400)
    next(error)
}
  return res.json(createdProduct);
}

async function httpUpdateProduct(req, res, next) {
  const productId = req.params.id;
  const newProduct = req.body;
  if (!productId || !newProduct){
    const error = new CustomError("product details missing", 400);
    next(error);
  }
  const isProductUpdated = await updateProduct(productId, newProduct);
  if (isProductUpdated.matchedCount !== 1){
    const error = new CustomError("invalid product id", 404);
    next(error);
  }
  if (
    isProductUpdated.matchedCount === 1 &&
    isProductUpdated.modifiedCount !== 1
  ){
    const error = new CustomError("nothing to update", 404);
    next(error);
  }
  return res.json({
    msg: "product updated successfully",
  });
}

module.exports = {
  httpGetAllProducts,
  httpGetProductById,
  httpAddNewProduct,
  httpUpdateProduct,
};
