require("dotenv").config();
var express = require("express");

var port = process.env.PORT;
var app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
