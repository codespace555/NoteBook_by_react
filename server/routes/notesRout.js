const express = require("express")
const {UserNotes} = require("../controller/UserNotes.js")
const {addNotes} = require("../controller/AddNotes.js")
const jwtAuth = require("../middleware/jwtAuth.js");
const { UpdateNotes } = require("../controller/UpdateNotes.js");
const { DeletNotes } = require("../controller/DeletNote.js");
const Noteroutes = express.Router()

Noteroutes.get("/notes",jwtAuth,UserNotes )
Noteroutes.post("/addnotes",jwtAuth,addNotes )
Noteroutes.put("/updatenote/:id",jwtAuth,UpdateNotes )
Noteroutes.delete("/deletenote/:id",jwtAuth,DeletNotes )

module.exports = Noteroutes;