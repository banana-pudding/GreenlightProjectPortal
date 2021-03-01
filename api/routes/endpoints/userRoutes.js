const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
//const auth = require("../auth");
const userModel = mongoose.model("User");

router.get("/", function (req, res, next) {
    console.log("here");
    return res.status(200).json({
        message: "here we are",
    });
});

router.get("/login", function (req, res) {
    res.sendFile("testing/login.html", { root: __dirname + "/../.." });
});

router.get("/profile", function (req, res) {
    res.send(req.session);
});

//POST new user route (optional, everyone has access)
router.post("/login", function (req, res, next) {
    console.log("req sessionid", req.session.id);
    var creds = req.body;

    if (!creds.euid) {
        return res.status(422).json({
            errors: {
                euid: "is required",
            },
        });
    }

    if (!creds.password) {
        return res.status(422).json({
            errors: {
                password: "is required",
            },
        });
    }

    passport.authenticate("local", (err, user) => {
        req.logIn(user, function (loginErr) {
            res.send(req.session);
        });
    })(req, res, next);
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/users/login");
}

module.exports = router;
