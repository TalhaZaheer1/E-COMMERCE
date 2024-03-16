const usersModel = require("./users.mongo");
const productsModel = require("../products/products.mongo")
const bcrypt = require("bcryptjs")

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "tzaheer72@gmail.com";

async function loginUser(email,password, done){
    try{
        const user = await usersModel.findOne({email},{ "__v":0 });
        if(!user)
            return done(null, false, { error: "user account not found" });
        const passMatched = await bcrypt.compare(password,user.password);
        console.log(passMatched)
        if(!passMatched)
            return done(null,false, { error: "invalid password" });
        return done(null,user);
    }catch(err){
        return { databaseError:true };
    }
} 

async function registerUser(newUser){
    const { password } = newUser;
    try{
    const isAlreadyPresent = await usersModel.findOne({email:newUser.email});
    if(isAlreadyPresent)
        return { isAlreadyPresent:true };
    if(newUser.email === ADMIN_EMAIL)
        newUser.role = "admin";
    const hash = await bcrypt.hash(password,8)
    newUser.password = hash;
    const  { name, email, cart, _id } = await usersModel.create(newUser);
    return { name, email, cart, _id } 
    }catch(err){
        return { databaseError:true };
    }
}

async function getCartById(id){
    // add populate for cart.items
    try{
        const user  = await usersModel.findOne({_id:id},{"_id":0,"cart":1}).sort("cart.items").populate("cart.items").lean();
        const cart = user.cart
        if(!cart)
            return { notFound:true }
        cart.items = cart.items.map(item => {
            item.totalQuantity = 1
            item.totalPrice = item.price
            return item
        })// mongoose enforces the schema and doesnt let me add field to objects that dont follow the schema even after the objects are returned
        
        for(let i = 0;i<cart.items.length;i++){
            const currentItem = cart.items[i];
            const nextItem = cart.items[i+1];
            if(currentItem._id.toString() === nextItem?._id.toString()){
                nextItem.totalQuantity = currentItem.totalQuantity + 1;
                nextItem.totalPrice = currentItem.totalPrice + currentItem.price; 
                console.log(nextItem.totalQuantity,i)
                cart.items[i] = null;
            }// i dont know why but when i update the property of one item it changes that property of all items.
        }
        const newItems = cart.items.filter(item => item !== null)
        return {
            items:newItems,
            totalPrice:cart.totalPrice,
            totalQuantity:cart.totalQuantity
        }
    }catch(err){
        console.log(err)
        return { databaseError:true }
    }
}


async function addToCart(id,productId){
    try{
        const product = await productsModel.findOne({_id:productId});
        console.log("yayyy")
        const isModified = await usersModel.updateOne({_id:id},{
            $push:{"cart.items":productId},
            $inc:{"cart.totalQuantity":1,"cart.totalPrice":product.price}
        });
        if(isModified.matchedCount !== 1 || isModified.modifiedCount !== 1)
        return { matchedCount:0 }
    return { modifiedCount:1 }
}catch(err){
    console.log(err)
        return { matchedCount:0 }
    }
}

function removeItem(allItems,id){
    for(let i = 0;i<allItems.length;i++){
        if(allItems[i].toString() === id){
            allItems[i] = null;
            return allItems
        }
    }
}
async function removeFromCart(id,productId){
    try{
        const product = await productsModel.findOne({_id:productId});
        const user  = await usersModel.findOne({_id:id},{"_id":0,"cart":1});
        const cart = user.cart;
        const newNullItems = removeItem(cart.items,productId);
        const newItems = newNullItems.filter(item => item !== null)
        const isModified = await usersModel.updateOne({_id:id},{"cart.items":newItems,$inc:{"cart.totalQuantity":-1,"cart.totalPrice":-product.price}});
        if(isModified.matchedCount !== 1 || isModified.modifiedCount !== 1)
            return { matchedCount:0 }
        return { modifiedCount:1 }
    }catch(err){
        console.log(err)
        return { matchedCount:0 }
    }
}

async function clearCart(id){
    try{
        const isModified = await usersModel.updateOne({_id:id},{
            "cart.items":[],
            "cart.totalQuantity":0,
            "cart.totalPrice":0
        })
        if(isModified.matchedCount !== 1 || isModified.modifiedCount !== 1)
            return { matchedCount:0 }
        return { modifiedCount:1 }
    }catch(err){
        return { modifiedCount:0 }
    }
}


module.exports = {
    loginUser,
    registerUser,
    getCartById,
    addToCart,
    removeFromCart,
    clearCart
}