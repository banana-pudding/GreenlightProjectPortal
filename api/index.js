require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");

require("./models/user.js");
require("./models/project.js");
require("./models/proposal.js");
require("./models/archive.js");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const passport = require("passport");
require("./config/passport")(passport);

var port = process.env.PORT;

//connect to the database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//create the express server
var app = express();
app.use(cookieParser(process.env.SESSION_SECRET));
//set up body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use sessions
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: false,
        resave: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI,
            collection: "session",
            ttl: parseInt(process.env.SESS_LIFETIME) / 1000,
        }),
        cookie: {
            sameSite: true,
            secure: false,
            maxAge: parseInt(process.env.SESS_LIFETIME),
        },
    })
);

app.use(passport.initialize());
app.use(passport.session());

//set up our router
app.use("/", require("./routes/router"));

//require("./testing/ldapSearcher.js");

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
