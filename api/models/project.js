/*
Copied from original repo!
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Project = new Schema(
    {
        name: String,
        owner: String,
        ownerID: String,
        status: String,
        description: String,
        file: String,
        tags: [String],
    },
    {
        collection: "projects",
    }
);

//this makes name, description and status searchable, and the weights are how significant a match in the given property is
Project.index(
    { name: "text", description: "text", status: "text" },
    { weights: { name: 5, description: 3, status: 1 } }
);

//methods to search for strings in all the projects
Project.statics = {
    searchPartial: function (q, callback) {
        console.log("seasrch partial");
        return this.find(
            {
                $or: [
                    { name: new RegExp(q, "gi") },
                    { description: new RegExp(q, "gi") },
                    { status: new RegExp(q, "gi") },
                ],
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
module.exports = mongoose.models.Post || mongoose.model("Project", Project);
