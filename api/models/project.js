const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Project = new Schema(
    {
        name: String,
        description: String, //longtext description of project
        github: String,
        flags: {
            isProposal: Boolean,
            isApproved: Boolean,
            isPendingClaim: Boolean,
            isNew: Boolean,
            isRecruiting: Boolean,
            isStarted: Boolean,
            isPaused: Boolean,
            isStopped: Boolean,
        },
        tags: [String],
        proposerEUID: String, //euid of proposer
        proposerName: String, //pretty name of proposer
        proposerEmail: String,
        ownerEUID: String, //euid of owner
        ownerName: String, //pretty name of owner
        ownerEmail: String,
        contributors: [
            //list of extra contributers (can be empty)
            {
                contributorEUID: String, //euid
                contributorName: String, //pretty name
                contributorEmail: String,
            },
        ],
        sponsors: [
            //list of euids of sponsors, can be one or empty
            {
                sponsorEUID: String, //euid
                sponsorName: String, //pretty name
                sponsorEmail: String,
            },
        ],
        pendingClaim: {
            claimingUserID: String,
            contributorEmails: [String],
            sponsorEmails: [String],
            github: String,
        },
        dateAdded: Date,
        dateProposed: Date,
        dateClaimed: Date,
        dateStarted: Date,
        datePaused: Date,
        dateStopped: Date,
        dateArchived: Date,
    },
    {
        collection: "projects",
    }
);

//this makes name, description and status searchable, and the weights are how significant a match in the given property is
Project.index({ name: "text", description: "text" }, { weights: { name: 5, description: 3 } });

//methods to search for strings in all the projects
Project.statics = {
    searchPartial: function (q, callback) {
        console.log("seasrch partial");
        return this.find(
            {
                $or: [{ name: new RegExp(q, "gi") }, { description: new RegExp(q, "gi") }],
            },
            callback
        );
    },

    searchFull: function (q, callback) {
        return this.find(
            {
                $text: { $search: q, $caseSensitive: false },
            },
            callback
        );
    },

    search: function (q, callback) {
        this.searchFull(q, (err, data) => {
            if (err) return callback(err, data);
            if (!err && data.length) return callback(err, data);
            if (!err && data.length === 0) return this.searchPartial(q, callback);
        });
    },
};

//cant tell what mongoose.models.Post does??
mongoose.model("Project", Project);
