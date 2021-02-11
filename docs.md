# Big Ol Documentation File

We should write all our things here so we know what the heck we're doing...

# API Endpoints

## /submit

Used to get info from the frontend and create a new project document in the database

req.body should be in the following format
name: String,
ownerEUID: String,
ownerName: String,
contributerEmails: [String], //list of unt emails for any additional teammates
description: String,
tags: String //comma or whitespace separated list of tags (this will be split up here)

should redirect you to the page for your newly created project
