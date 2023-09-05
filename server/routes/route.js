const express = require("express")
const {singup} = require("../controller/singup")
const {login} = require("../controller/Login")
const {getUser} = require("../controller/getUser")

const jwtAuth = require("../middleware/jwtAuth.js");
const routes = express.Router()
// router....................................
routes.post("/singup",singup )
routes.post("/login", login)
routes.get("/user",jwtAuth, getUser)
module.exports = routes;