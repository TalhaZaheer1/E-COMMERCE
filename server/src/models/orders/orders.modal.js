const orderModel = require("./orders.mongo");

async function placeOrder(sessionData, customer){
    const products = customer.metadata.products.map(product => ({
        product:product._id,
        totalQuantity:product.totalQuantity,
        totalPrice:product.totalPrice,
    }))
    const newOrder = {
        products,
        subtotal: sessionData.amount_subtotal,
        total: sessionData.amount_total,
        paymentStatus: sessionData.payment_status,
        shippingAddress: sessionData.shipping_details,
        customer: customer.metadata.userId
    }
    try{
    const savedOrder = await orderModel.create(newOrder)
    return savedOrder
    }catch(err){
        console.log(err)
        return { databaseError: true }
    }
}

async function getAllOrders(){
    try{
        const orders = await orderModel.find({}).populate("products.product","-totalQuantity -totalPrice").lean();
        return orders
    }catch(err){
        console.log(err)
        return { databaseError: true }
    }
}

async function getUserOrders(userId){
    try{
        const orders = await orderModel.find({ customer:userId }).populate("products.product","-totalQuantity -totalPrice -stock").lean();
        return orders
    }catch(err){
        console.log(err)
        return { databaseError: true }
    }
}

async function updateOrder(userId,updates){
    try{
    const order = await orderModel.findOne({ customer: userId })
    const { shippedDate, deliveryStatus, orderStatus } = updates;
    if(shippedDate)
        order.shippedDate = shippedDate;
    if(deliveryStatus)
        order.deliveryStatus = deliveryStatus;
    if(orderStatus)
        order.orderStatus = orderStatus;
    await order.save()
    return order
    }catch(err){
        console.log(err)
        return { databaseError: true }
    }
}

async function cancelOrder(userId){
    try{
        const order = await orderModel.findOne({ customer: userId });
        order.orderStatus = "canceled";
        await order.save();
        return order;
    }catch(err){
        console.log(err);
        return { databaseError: true };
    }
}

module.exports = {
    placeOrder,
    getAllOrders,
    getUserOrders,
    cancelOrder,
    updateOrder,
}

