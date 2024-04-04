const usersModel = require("./users.mongo");
const productsModel = require("../products/products.mongo");
const bcrypt = require("bcryptjs");

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "tzaheer72@gmail.com";

async function loginUser(email, password, done) {
  try {
    const user = await usersModel.findOne({ email }, { __v: 0 });
    if (!user) return done(null, false, { error: "user account not found" });
    const passMatched = await bcrypt.compare(password, user.password);
    console.log(passMatched);
    if (!passMatched) return done(null, false, { error: "invalid password" });
    return done(null, user);
  } catch (err) {
    return { databaseError: true };
  }
}

async function registerUser(newUser) {
  const { password } = newUser;
  try {
    const isAlreadyPresent = await usersModel.findOne({ email: newUser.email });
    if (isAlreadyPresent) return { isAlreadyPresent: true };
    if (newUser.email === ADMIN_EMAIL) newUser.role = "admin";
    const hash = await bcrypt.hash(password, 8);
    newUser.password = hash;
    const { name, email, cart, _id } = await usersModel.create(newUser);
    return { name, email, cart, _id };
  } catch (err) {
    return { databaseError: true };
  }
}

// function getCart(cart) {
//   // add populate for cart.items
  
//     // const user = await usersModel
//     //   .findOne({ _id: id }, { _id: 0, cart: 1 })
//     //   .sort("cart.items")
//     //   .populate("cart.items")
//     //   .lean();
//     // const cart = user.cart;
//     if(!cart) 
//       return { notFound: true };
//     const newCart = Object.assign({},cart);
//     newCart.items = newCart.items.map((item) => {
//       item.totalQuantity = 1;
//       item.totalPrice = item.price;
//       return item;
//     }); // mongoose enforces the schema and doesnt let me add field to objects that dont follow the schema even after the objects are returned

//     for (let i = 0; i < newCart.items.length; i++) {
//       const currentItem = newCart.items[i];
//       const nextItem = newCart.items[i + 1];
//       if (currentItem._id.toString() === nextItem?._id.toString()) {
//         nextItem.totalQuantity = currentItem.totalQuantity + 1;
//         nextItem.totalPrice = currentItem.totalPrice + currentItem.price;
//         console.log(nextItem.totalQuantity, i);
//         newCart.items[i] = null;
//       } // i dont know why but when i update the property of one item it changes that property of all items if same _id.
//     }
//     const newItems = newCart.items.filter((item) => item !== null);
//     return {
//       items: newItems,
//       totalPrice: newCart.totalPrice,
//       totalQuantity: newCart.totalQuantity,
//     };
// }

async function addToCart(cart, productId) {
  try {
    for(let i = 0;i<cart.items.length;i++){
      const item = cart.items[i];
      const product = cart.items[i].product;
      if(product._id === productId){
        item.totalQuantity += 1
        item.totalPrice = item.totalPrice + product.price;
        cart.totalQuantity += 1;
        cart.totalPrice += product.price;
        return;
      }
    }

    const product = await productsModel.findOne({ _id: productId }).lean();
    if(!product)
      return { matchedCount: 0 };
    // const isModified = await usersModel.updateOne(
    //   { _id: id },
    //   {
    //     $push: { "cart.items": productId },
    //     $inc: { "cart.totalQuantity": 1, "cart.totalPrice": product.price },
    //   }
    // );
    // if (isModified.matchedCount !== 1 || isModified.modifiedCount !== 1)
    //   return { matchedCount: 0 };
    const newItem = {
      product,
      totalQuantity:1,
      totalPrice:product.price,
    }
    cart.items.push(newItem);
    cart.totalQuantity += 1;
    cart.totalPrice += product.price;
    return cart;
  } catch (err) {
    console.log(err);
    return { matchedCount: 0 };
  }
}

function removeItem(allItems, productId) {
  for (let i = 0; i < allItems.length; i++) {
    if (allItems[i].product._id.toString() === productId) {
      allItems[i] = null;
      return allItems;
    }
  }
}

async function removeFromCart(cart, productId) {
  try {
    for(let i = 0;i<cart.items.length;i++){
      const item = cart.items[i];
      const product = cart.items[i].product;
      if(product._id === productId && item.totalQuantity > 1){
        item.totalQuantity -= 1
        item.totalPrice =  item.totalPrice - product.price
        cart.totalQuantity -= 1;
        cart.totalPrice -= product.price;
        return;
      }
    }
    // const user = await usersModel.findOne({ _id: id }, { _id: 0, cart: 1 });
    // const cart = user.cart;
    const newNullItems = removeItem(cart.items, productId);
    const newItems = newNullItems.filter((item) => item !== null);
    // const isModified = await usersModel.updateOne(
    //   { _id: id },
    //   {
    //     "cart.items": newItems,
    //     $inc: { "cart.totalQuantity": -1, "cart.totalPrice": -product.price },
    //   }
    // );
    // if (isModified.matchedCount !== 1 || isModified.modifiedCount !== 1)
    //   return { matchedCount: 0 };
    cart.items = newItems;
    cart.totalQuantity -= 1;
    cart.totalPrice -= product.price;
    return cart;
  } catch (err) {
    console.log(err);
    return { matchedCount: 0 };
  }
}

function clearCart(cart) {
    // const isModified = await usersModel.updateOne(
    //   { _id: id },
    //   {
    //     "cart.items": [],
    //     "cart.totalQuantity": 0,
    //     "cart.totalPrice": 0,
    //   }
    // );
    // if (isModified.matchedCount !== 1 || isModified.modifiedCount !== 1)
    //   return { matchedCount: 0 };
    cart.items = [];
    cart.totalQuantity = 0;
    cart.totalPrice = 0;
    return cart;
}

module.exports = {
  loginUser,
  registerUser,
  addToCart,
  removeFromCart,
  clearCart,
};
