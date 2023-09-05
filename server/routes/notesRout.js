const express = require("express")

const Noteroutes = express.Router()

Noteroutes.get("/notes", (req, res) => {
    res.status(200).send({
      data: "NoteBook notes Server",
    });

  })
   
   


module.exports = Noteroutes;