const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");

//POST new user route (optional, everyone has access)
router.post("/login", auth.optional, function (req, res, next) {
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

    passport.authenticate("local", { session: false }, (err, passportUser) => {
        if (passportUser) {
            const user = passportUser;
            user.token = passportUser.generateJWT();

            return res.json({ user: user.toAuthJSON() });
        }
    })(req, res, next);
});

module.exports = router;
