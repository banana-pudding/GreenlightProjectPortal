const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

let User = new Schema({
    euid: String,
    fname: String,
    lname: String,
    emails: [String],
    flags: {
        isStudent: Boolean,
        isEmployee: Boolean,
        isAdmin: Boolean,
    },
    ownerProjectIDs: [String],
    sponsorProjectIDs: [String],
    contributorProjectIDs: [String],
});

User.methods.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign(
        {
            euid: this.euid,
            id: this._id,
            exp: parseInt(expirationDate.getTime() / 1000, 10),
        },
        "secret"
    );
};

User.methods.toAuthJSON = function () {
    return {
        _id: this._id,
        euid: this.euid,
        token: this.generateJWT(),
    };
};

mongoose.model("User", User);
