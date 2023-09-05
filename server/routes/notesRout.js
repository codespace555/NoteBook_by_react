const express = require("express")
const {UserNotes} = require("../controller/UserNotes.js")
const jwtAuth = require("../middleware/jwtAuth.js");
const Noteroutes = express.Router()

Noteroutes.get("/notes",jwtAuth,UserNotes )
module.exports = Noteroutes;