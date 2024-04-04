const stripe = require("stripe")(process.env.STRIPE_SECRET);
const { getCart } = require("../../models/users/users.modal")
const { CustomError } = require("../../services/utils")
const {
    placeOrder,
    getAllOrders,
    getUserOrders,
    cancelOrder,
    updateOrder,
} = require("../../models/orders/orders.modal")
const webhookSecret = process.env.wSecret;

async function httpCreateCheckoutSession(req,res,next){
    if(req.session.cart.items.length === 0){
        const error = new CustomError("cart is empty",400)    
        next(error)
    }

    const userId = req.user._id
    const products = getCart(req.session.cart).items;
    
    const customer = await stripe.customers.create({
        metadata:{
            userId,
            products
        }
    })
    const line_items = products.map(product => ({
        price_data:{
            currency:"usd",
            product_data:{
                id:product._id,
                name:product.name,
            },
            unit_amount:product.price * 100,
        },
        quantity:product.totalQuantity
    }))


    stripe.checkout.sessions.create({
        line_items,
        shipping_address_collection:{
            allowed_countries:["US"]
        },
        shipping_options:{
            shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 0,
                  currency: 'usd',
                },
                display_name: 'Free shipping',
                delivery_estimate: {
                  minimum: {
                    unit: 'business_day',
                    value: 5,
                  },
                  maximum: {
                    unit: 'business_day',
                    value: 7,
                  },
                },
            },
            shipping_rate_data:{
                type: "fixed_amount",
                fixed_amount:{
                    amount: 1500,
                    currency: "usd"
                },
                display_name: "Express",
                delivery_estimate: {
                    minimum: {
                      unit: 'business_day',
                      value: 1,
                    },
                    maximum: {
                      unit: 'business_day',
                      value: 1,
                    },
                }
            },
        },
        customer:customer.id,
        mode: "payment",
        successUrl: `${process.env.DOMAIN}/payment/success`,
        cancel_url: `${process.env.DOMAIN}/payment/failed`
    })
    .then(session => {
        res.json({ id: session.id })
    })
    .catch(err => next(err)); 
}

async function httpWebhookHandler(req,res,next){
    if(req.body.type)
        res.status(200).end()
    const sig = req.headers["stripe-signature"];
    let event;
    try{
        event = stripe.webhooks.constructEvent(req.body,sig,webhookSecret);
    }catch(err){
        const error = new CustomError(err.message,400);
        next(error);
    }
    if(event.type === "checkout.session.completed"){
        const sessionData = event.data.object;
        const customer = await stripe.customers.retrieve(session.customer);
        const savedOrder = await placeOrder(sessionData, customer);
        return
    }
}

async function httpGetAllOrders(req,res,next){
    const orders = await getAllOrders()
    if(orders?.databaseError){
        const error = new CustomError("database error",500)
        return next(error)
    }
    return res.json(orders)
}

async function httpGetUserOrders(req,res,next){
    const orders = await getUserOrders(req.user._id)
    if(orders?.databaseError){
        const error = new CustomError("database error",500)
        return next(error)
    }
    return res.json(orders)
}

async function httpUpdateOrder(req,res,next){
    const userId = req.user._id;
    const updates = req.body;
    if(!updates.shippedDate && !updates.deliveryStatus && !updates.orderStatus){
        const error = new CustomError("please provide atleast one update",400)
        return next(error)
    }
    const updatedOrder = await updateOrder(userId,updates)
    if(updatedOrder.databaseError){
        const error = new CustomError("database error",500)
        return next(error)
    }
    return res.json(updatedOrder)
}

async function httpCancelOrder(req,res,next){
    const canceledOrder = await cancelOrder(req.user._id);
    if(canceledOrder.databaseError){
        const error = new CustomError("database error",500)
        return next(error)
    }
    return res.json(canceledOrder)
}