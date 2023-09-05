const express = require("express")
const {singup} = require("../controller/singup")
const routes = express.Router()

routes.post("/singup",singup )










  routes.get("/signin", (req, res) => {
    res.status(200).send({
      data: "NoteBook signin Server",
    });
  })
  routes.get("/user", (req, res) => {
    res.status(200).send({
      data: "NoteBook  user Server",
    });
  })
  routes.get("/logout", (req, res) => {
    res.status(200).send({
      data: "NoteBook logout Server",
    });
  })

module.exports = routes;