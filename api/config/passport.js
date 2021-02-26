const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
var fs = require("fs");
const Users = mongoose.model("User");
var ldap = require("ldapjs");

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

passport.use(
    new LocalStrategy(
        {
            usernameField: "euid",
            passwordField: "password",
        },
        (euid, password, done) => {
            console.log("in passport");

            var login = ldap.createClient({
                url: "ldaps://ldap-id.untsystem.edu",
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
                            result.on("searchEntry", (entry) => {
                                //console.log("entry: " + JSON.stringify(entry.object));
                            });

                            result.on("end", (result2) => {
                                //console.log("status: " + result2.status);
                            });
                        }
                    );
                    login.unbind();
                    return done(null, false, {
                        message: "That worked!",
                    });
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
