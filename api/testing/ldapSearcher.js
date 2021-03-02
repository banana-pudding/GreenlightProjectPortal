var ldap = require("ldapjs");
/*
mark albert = {
    dn: "uid=mva0023,ou=people,o=unt",
    controls: [],
    role: "untfs",
    euid: "mva0023",
    prefname: "Mark",
    mail: "Mark.Albert@unt.edu",
    uid: "mva0023",
    givenName: "Mark",
    sn: "Albert",
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
};

mark thompson = {
    dn: "uid=met0108,ou=people,o=unt",
    controls: [],
    role: "untfs",
    euid: "met0108",
    prefname: "Mark",
    mail: "Mark.Thompson@unt.edu",
    uid: "met0108",
    givenName: "Mark",
    sn: "Thompson",
    objectClass: [
        "inetOrgPerson",
        "untperson",
        "organizationalPerson",
        "person",
        "ndsLoginProperties",
        "top",
        "mailProperties",
        "eduPerson",
        "DirXML-PasswordSyncStatusUser",
    ],
};

student worker = {
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

student = {
  dn: 'uid=sbf0056,ou=people,o=unt',
  controls: [],
  role: 'untst',
  euid: 'sbf0056',
  prefname: 'Sara',
  mail: 'SaraFlores2@my.unt.edu',
  uid: 'sbf0056',
  givenName: 'Sara',
  sn: 'Flores',
  objectClass: [
    'inetOrgPerson',
    'untperson',
    'organizationalPerson',
    'person',
    'ndsLoginProperties',
    'top',
    'eduPerson',
    'mailProperties'
  ]
}
*/

var login = ldap.createClient({
    url: "ldaps://ldap-id.untsystem.edu",
});

login.addListener("error", function (err) {
    console.log("LDAP kicked us out, but it's fine I think", err);
});
login.search(
    "ou=people,o=unt",
    {
        filter: "(&(givenName=Sara)(sn=Flores)(euid=sbf*))",
        scope: "sub",
    },
    function (err2, result) {
        console.log("searched");
        result.on("searchEntry", (entry) => {
            //var object = JSON.parse(entry);
            console.log(entry.object);
            //console.log("entry: " + JSON.stringify(entry.object));
        });

        result.on("end", (result2) => {
            console.log("status: " + result2.status);
        });
    }
);
