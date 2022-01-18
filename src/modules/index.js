const express = require("express");
const cors = require("cors");

const app = express();

//middleWares
app
  .use(express.urlencoded({ extended: true }))
  .use(cors())
  .use(express.static("public"));

//app settings
app.set("view engine", "ejs");

//Routes
const home = require("./home/route");
const mail = require("./mail/route");

app.use("/", home)
app.use("/", mail)
// .use("/message", message);

module.exports = app;