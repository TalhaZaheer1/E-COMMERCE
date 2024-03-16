const http = require("http");
require("dotenv").config();
const app = require("./app");
const { connectToMongo } = require("./services/db");
// const { createSearchIndex } = require("./models/products.modal")
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);


async function startServer(){
    await connectToMongo();
    // await createSearchIndex()
    server.listen(PORT,() => {
        console.log(`server listening on port:${PORT}`)
    });
}

startServer()

