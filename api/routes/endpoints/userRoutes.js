const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");

//* POST /users/login
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
            //const user = passportUser;
            //user.token = passportUser.generateJWT();

            return res.json(passportUser.toAuthJSON());
        }
    })(req, res, next);
});

router.get("/oof", loggedIn, function (req, res) {
    res.json({ yay: "yay" });
});

//TODO: POST /users/validate

function loggedIn(req, res, next) {
    auth.required(req, res, function (err) {
        if (err && err.name === "UnauthorizedError") {
            return res.status(401).send("Login again");
        } else {
            return next();
        }
    });
}

module.exports = router;
