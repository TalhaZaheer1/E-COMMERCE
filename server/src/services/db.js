const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://tech-merchant:DrrpW8ioTdiWpRhQ@tech-commerce.37zfn4c.mongodb.net/?retryWrites=true&w=majority&appName=tech-commerce"

mongoose.connection.on("open",() => {
    console.log("Database connected")
})

mongoose.connection.on("error",(err) => {
    console.error(err)
})

async function connectToMongo(){
    await mongoose.connect(MONGO_URL)
}

async function disconnectToMongo(){
    await mongoose.disconnect()
}

module.exports = {
    connectToMongo,
    disconnectToMongo
}