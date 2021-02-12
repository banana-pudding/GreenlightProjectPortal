var projectModel = require("../models/project");

module.exports = function (app) {
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
    app.post("/submit", async function (req, res) {
        res.status(200);
    });
};
