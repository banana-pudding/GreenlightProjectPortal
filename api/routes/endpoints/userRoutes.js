const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");
const userModel = mongoose.model("User");

router.get("/", auth.optional, function (req, res, next) {
    console.log("here");
    return res.status(200).json({
        message: "here we are",
    });
});

//POST new user route (optional, everyone has access)
router.post("/test", auth.optional, (req, res, next) => {
    console.log(req.body);
    var user = req.body;

    if (!user.euid) {
        return res.status(422).json({
            errors: {
                euid: "is required",
            },
        });
    }

    if (!user.password) {
        return res.status(422).json({
            errors: {
                password: "is required",
            },
        });
    }

    return passport.authenticate("local", { session: false }, (err, req2, res2) => {
        console.log("here", err, req2, res2);
        /*
        if (err) {
            return next(err);
        }

        if (passportUser) {
            const thisUser = passportUser;
            thisUser.token = passportUser.generateJWT();

            return res.json({ user: thisUser.toAuthJSON() });
        }
        */
        return res.status(422).json({
            error: "didnt work",
        });
    })(req, res, next);

    //const finalUser = new userModel(user);

    //finalUser.setPassword(user.password);

    //return finalUser.save().then(() => res.json({ user: finalUser.toAuthJSON() }));
});

module.exports = router;
