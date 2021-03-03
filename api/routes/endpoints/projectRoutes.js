const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");
const projectModel = mongoose.model("Project");
const userModel = mongoose.model("User");

/*
endpoint to handle adding a new project entry

req.body should look like the following:
{
    isProposal: true|false,		//false for a full project
    projectName: "name",
    projectDesc: "description",
    github: "link-here",
    isActive: true|false,
    isRecruiting: true|false,
    groupEmails: ["email", ...],
    sponsorEmails: ["email", ...],
    tags: ["tag1", ...]
}
*/
router.post("/submit", async function (req, res) {
    console.log(req.user); //this contains the id of the user and the euid
    console.log(req.body); //this contains the data submitted

    var thisUser = await userModel.findById(req.user.id);
    //later check for errors here

    var input = req.body; //just to save time tpying lol
    var now = new Date();

    //this is all garunteed to be in req.body no matter what was submitted
    var newItem = {
        name: input.projectName,
        description: input.projectDesc,
        flags: {
            isProposal: input.isFullProject,
            isApproved: false, //will later be true only if the submitting user is an admin
            isNew: true,
        },
        tags: input.tags,
        github: input.github,
        dateAdded: now,
    };

    //if this is a new proposal submission:
    if (input.isProposal) {
        newItem.proposerName = thisUser.fname + " " + thisUser.lname;
        newItem.proposerEUID = thisUser.euid;
        newItem.proposerEmail = thisUser.emails[0];
        newItem.dateProposed = now;
    }
    //otherwise this is a new full project subnmission
    else {
        newItem.ownerName = thisUser.fname + " " + thisUser.lname;
        newItem.ownerEUID = thisUser.euid;
        newItem.ownerEmail = thisUser.emails[0];

        newItem.contributors = [];
        newItem.sponsors = [];

        //here is where we would ask LDAP to give us some more information on the contributors and sponsors based on their emails
        //for now, im just going to fill in their emails

        if (input.hasOwnProperty("groupEmails") && input.groupEmails.length > 0) {
            for (var thisContributorEmail of input.groupEmails) {
                var thisContributor = {
                    contributorEUID: "none",
                    contributorName: "none",
                    contributorEmail: thisContributorEmail,
                };

                newItem.contributors.push(thisContributor);
            }
        }

        if (input.hasOwnProperty("sponsorEmails") && input.sponsorEmails.length > 0) {
            for (var thisSponsorEmail of input.sponsorEmails) {
                var thisSponsor = {
                    contributorEUID: "none",
                    contributorName: "none",
                    contributorEmail: thisSponsorEmail,
                };

                newItem.sponsors.push(thisSponsor);
            }
        }
    }

    //done adding all fields, now we make a document with this information
    var newSubmissionDocument = new projectModel(newItem);

    //always save the document to make it stay
    await newSubmissionDocument.save();

    //check?
    console.log(newSubmissionDocument);

    res.status(200).send("okie");
});

module.exports = router;
