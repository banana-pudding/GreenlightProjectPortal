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
    ownerID: String,  //database _id of the requesting user
    contributerEmails: [String], //list of unt emails for any additional teammates
    description: String,
    tags: String //comma or whitespace separated list of tags (this will be split up here)
}
*/
router.post("/submit", async function (req, res) {
    console.log(req.user);
    res.status(200).send("okie");
});

module.exports = router;
