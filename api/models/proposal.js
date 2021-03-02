const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Proposal = new Schema(
    {
        name: String,
        description: String, //longtext description of project
        flags: {
            isNew: Boolean,
        },
        tags: [String],
        ownerEUID: String, //euid of owner
        ownerName: String, //pretty name of owner
        ownerEmail: String,
        dateProposed: Date,
        image: String,
    },
    {
        collection: "proposals",
    }
);

Proposal.index({ name: "text", description: "text" }, { weights: { name: 5, description: 3 } });

//methods to search for strings in all the projects
Proposal.statics = {
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
mongoose.model("Proposal", Proposal);
