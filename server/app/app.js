const express = require("express");
var cors = require('cors')
const routes = require("../routes/route.js")
const Noteroutes = require("../routes/notesRout.js")
const dbconnect = require("../config/db.config.js");
const cookieParser = require("cookie-parser");
dbconnect();

const app = express();
let corsOptions = {
  origin: 'http://http://localhost:5173/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", routes);
app.use("/api/user", Noteroutes);

app.get("/",cors(corsOptions), (req, res) => {
    res.status(200).send({
      data: "NoteBook Server",
    });
  })

module.exports = app;