const mongoose = require("mongoose");
const LocalStrategy = require("passport-local");
const User = mongoose.model("User");
var ldap = require("ldapjs");

module.exports = function (passport) {
    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        console.log("serialise");
        done(null, user._id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        console.log("deserialize");
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use(
        new LocalStrategy(
            {
                usernameField: "euid",
                passwordField: "password",
            },
            (euid, password, done) => {
                var login = ldap.createClient({
                    url: "ldaps://ldap-id.untsystem.edu",
                });

                login.addListener("error", function (err) {
                    console.log("LDAP kicked us out, but it's fine I think", err);
                });

                var loginDN = "uid=" + euid + ",ou=people,o=unt";

                login.bind(loginDN, password, function (err, res) {
                    if (err) {
                        login.unbind();
                        return done(null, false, {
                            message: "Password not recognised. Try again?",
                        });
                    } else {
                        login.search(
                            "ou=people,o=unt",
                            {
                                filter: "(uid=" + euid + ")",
                                scope: "sub",
                            },
                            function (err2, result) {
                                var ldapUser = {};
                                result.on("searchEntry", (entry) => {
                                    //console.log("entry: " + JSON.stringify(entry.object));
                                    var results = entry.object;

                                    //name and euid
                                    ldapUser.euid = results.euid;
                                    ldapUser.fname = results.givenName;
                                    ldapUser.lname = results.sn;

                                    //email(s)
                                    ldapUser.emails = [];
                                    ldapUser.emails.push(results.mail);
                                    if (results.hasOwnProperty("employeeMail") && results.employeeMail) {
                                        ldapUser.emails.push(results.employeeMail);
                                    }

                                    //student, employee, or both
                                    if (Array.isArray(result.role)) {
                                        for (const thisRole of role) {
                                            if (thisRole == "untst") {
                                                ldapUser.flags.isStudent = true;
                                            } else if (thisRole == "untfs") {
                                                ldapUser.flags.isEmployee = true;
                                            }
                                        }
                                    } else {
                                        if (result.role == "untst") {
                                            ldapUser.flags.isStudent = true;
                                        } else if (result.role == "untfs") {
                                            ldapUser.flags.isEmployee = true;
                                        }
                                    }
                                });

                                result.on("end", (result2) => {
                                    //console.log("status: " + result2.status);
                                    User.findOne({ euid: ldapUser.euid }, function (err3, localUser) {
                                        if (err3) {
                                            console.log(err3);
                                        }
                                        login.unbind();
                                        if (localUser) {
                                            return done(null, localUser);
                                        } else {
                                            var newLocalUser = new User(ldapUser);
                                            newLocalUser.save(function (saveErr, saveResult) {
                                                if (saveErr) {
                                                    console.log(saveErr);
                                                } else {
                                                    return done(null, saveResult);
                                                }
                                            });
                                        }
                                    });
                                });
                            }
                        );
                    }
                });

                /*
            Users.findOne({ euid })
                .then((user) => {
                    if (!user || !user.validatePassword(password)) {
                        return done(null, false, { errors: { "email or password": "is invalid" } });
                    }

                    return done(null, user);
                })
                .catch(done);
            */

                //connect to ldap and ask if the username and password is valid

                //if so, look in the database to find an existing match

                //if match, return that document

                //if no match, make the document then return it

                //if not valid, return invalid message

                //return done(null, { object: "yo" }, null);
            }
        )
    );
};

/*
Example result from searching

for each person returned
entry: {
    dn: "uid=hcf0018,ou=people,o=unt",
    controls: [],
    preferEmployeeMail: "Hanna.Flores@unt.edu",
    preferStudentMail: "HannaFlores@my.unt.edu",
    employeeMail: "Hanna.Flores@unt.edu",
    studentMail: "HannaFlores@my.unt.edu",
    eduPersonScopedAffiliation: ["student@unt.edu", "member@unt.edu", "staff@unt.edu"],
    eduPersonAffiliation: ["student", "member", "staff"],
    role: ["untst", "untfs"],
    euid: "hcf0018",
    prefname: "Hanna",
    emplid: "11197290",
    mail: "HannaFlores@my.unt.edu",
    uid: "hcf0018",
    givenName: "Hanna",
    untjobtitle: "Student Assistant - Regular",
    sn: "Flores",
    ou: "University Library-Gen",
    objectClass: [
        "inetOrgPerson",
        "untperson",
        "organizationalPerson",
        "person",
        "ndsLoginProperties",
        "top",
        "eduPerson",
        "mailProperties",
    ],
    groupMembership: [
        "cn=AdobeCloud,ou=UNTGroups,o=unt",
        "cn=DuoUsers,ou=DuoSecurity,o=unt",
        "cn=AdobeStudents,ou=UNTGroups,o=unt",
    ],
    cn: "Hanna Claire Flores",
}

final status
status: 0,
*/
