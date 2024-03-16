const express = require("express")
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")
const passport = require("passport")
const v1Router = require("./routes/v1Router")

const app = express();
require("./services/passport");
const sessionStore = new MongoStore({
    mongoUrl:process.env.MONGO_URL || "mongodb+srv://tech-merchant:DrrpW8ioTdiWpRhQ@tech-commerce.37zfn4c.mongodb.net/?retryWrites=true&w=majority&appName=tech-commerce",
    collection:"sessions"
})

app.use(helmet());
app.use(cors({
        origin: "http://localhost:3000",
        credentials:true
    })
);
app.use(express.json())
app.use(session({
    secret:"someSecret",
    store:sessionStore,
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(passport.initialize());
app.use(passport.session());
app.use("/v1",v1Router)

module.exports = app;