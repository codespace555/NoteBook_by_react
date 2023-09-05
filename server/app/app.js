const express = require("express");
const routes = require("../routes/route.js")
const Noteroutes = require("../routes/notesRout.js")
const dbconnect = require("../config/db.config.js");
dbconnect();
const app = express();
app.use(express.json());
app.use("/api/auth", routes);
app.use("/api", Noteroutes);

app.get("/", (req, res) => {
    res.status(200).send({
      data: "NoteBook Server",
    });
  })

module.exports = app;