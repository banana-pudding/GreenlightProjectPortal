require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const session = require("express-session");

var port = process.env.PORT;

//connect to the database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
require("./models/user.js");
require("./models/project.js");
require("./models/proposal.js");
require("./models/archive.js");

//create the express server
var app = express();

//set up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set up sessions
//app.use(session({ secret: "passport-tutorial", cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

//set up our router
app.use("/", require("./routes/router"));

//pull in the passport configuration
require("./config/passport");

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
