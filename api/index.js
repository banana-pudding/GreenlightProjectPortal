require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");

var port = process.env.PORT;
var app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (req, res) => {
    res.send("Hello World!");
});

require("./routes/projectRoutes.js")(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
