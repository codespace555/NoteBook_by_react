const express = require("express");
const routes = require("../routes/route.js")
const Noteroutes = require("../routes/notesRout.js")
const dbconnect = require("../config/db.config.js");
const cookieParser = require("cookie-parser");
dbconnect();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", routes);
app.use("/api/user", Noteroutes);

app.get("/", (req, res) => {
    res.status(200).send({
      data: "NoteBook Server",
    });
  })

module.exports = app;