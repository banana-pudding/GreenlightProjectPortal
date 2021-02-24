const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Archive = new Schema(
    {
        name: String,
        description: String, //longtext description of project
        flags: {
            isNew: Boolean,
            isStarted: Boolean,
        },
        tags: [String],
        ownerEUID: String, //euid of owner
        ownerName: String, //pretty name of owner
        ownerEmail: String,
        contributers: [
            //list of extra contributers (can be empty)
            {
                contributerEUID: String, //euid
                contributerName: String, //pretty name
                contributerEmail: String,
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
        dateProposed: date,
        datePromoted: date,
        dateStarted: date,
        datePaused: date,
        dateStopped: date,
        dateArchived: date,
        image: String,
    },
    {
        collection: "archived",
    }
);

Archive.index({ name: "text", description: "text" }, { weights: { name: 5, description: 3 } });

//methods to search for strings in all the projects
Archive.statics = {
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
module.exports = mongoose.models.Post || mongoose.model("Project", Project);
