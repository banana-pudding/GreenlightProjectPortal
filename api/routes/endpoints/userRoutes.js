const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");

//* POST /users/login
router.post("/login", function (req, res, next) {
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

router.get("/oof", function (req, res) {
    res.json({ yay: "yay" });
});

//TODO: POST /users/validate

module.exports = router;
