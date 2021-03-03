const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");
const projectModel = mongoose.model("Project");

/*
endpoint to handle adding a new project entry

req.body should look like the following:
{
    name: String,
    ownerEUID: String,
    ownerName: String,
    contributerEmails: [String], //list of unt emails for any additional teammates
    description: String,
    tags: String //comma or whitespace separated list of tags (this will be split up here)
}
*/
router.post("/submit", loggedIn, async function (req, res) {
    res.status(200);
});

function loggedIn(req, res, next) {
    auth.required(req, res, function (err) {
        if (err && err.name === "UnauthorizedError") {
            return res.status(401).send("Login again");
        } else {
            return next();
        }
    });
}

module.exports = router;
