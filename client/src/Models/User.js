export const User = {
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
    contributorProjectIDs: [String]
}