const express = require("express");
require("bcrypt");
require("mysql");
const session = require("express-session");
require("crypto");
var bodyParser = require("body-parser");
require("request");
require("cookie");
require("express-session");
require("cookiejar");
require("js-tokens");
require("express-mysql-session")(session);
require("to-arraybuffer");
require("promise");
require("faye-websocket");
require("websocket-extensions");
require("ws");
require("node-forge");
require("fs-extra");
require("node-fetch");
require("cassandra-driver");
var cookieParser = require("cookie-parser");
require("dotenv");
var mustacheExpress = require("mustache-express");
const { MongoClient } = require("mongodb");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const authroutes = require("./api/auth");
const userroutes = require("./api/user");
const mediapostroutes = require("./api/mediapost");
require("express");
const User = require("./models/User");
const app = express();
mongoose.connect("mongodb+srv://quax:1234@cluster0.id76b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
}).then((result) => console.log("connected to db")).catch((err) => console.log(err));
websocket = require("websocket-driver");
app.use(express.json());
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/public");
app.use(cookieParser());
const uri = "mongodb+srv://quax:1234@cluster0.id76b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect((err) => {
  client.db("test").collection("devices");
  client.close();
});
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  resave: false,
  saveUninitialized: true,
  name: "sid",
  secret: "some secret",
  store: MongoStore.create({
    mongoUrl: "mongodb+srv://quax:1234@sessions.mnty4.mongodb.net/myFirstDatabase"
  }),
  cookie: {
    maxage: 99 * 99,
    samesite: false,
    secure: false,
    httpOnly: true
  }
}));
app.use((req, res, next) => {
  if (req.cookies.sid && !req.session.user) {
    res.clearCookie("sid");
  }
  next();
});
app.get("/profile/:userid", function(req, res, next) {
  var id = req.params.userid;
  var getUserDetails = userModel.find({ _id: id }, { "email": 1, "profileImage": 1 });
  getUserDetails.exec().then((data) => {
    res.status(200).json({
      message: "OK",
      results: data
    });
  }).catch((err) => {
    res.json(err);
  });
  res.render("", {
    username,
    avatar
  });
});
app.use("/api/auth", authroutes);
app.use("/api/user", userroutes);
app.use("/api/mediapost", mediapostroutes);
app.get("/setting", (req, res) => {
  res.sendFile(__dirname + "/public/setting/setting.html");
});
app.get("/logedin", (req, res) => {
  if (!req.session || !req.sessionID || !req.session.user || !req.cookies.sid) {
    const err = new Error("unatuh");
    err.statusCode = 401;
    res.redirect("/login");
  } else {
    res.render("logedin", { username: User.username });
  }
  console.log(req.sessionID);
});
app.get("/group/:groupid", (req, res) => {
  res.sendFile(__dirname + "/public/group/group.html");
});
app.get("/message/:userid", (req, res) => {
  res.sendFile(__dirname + "/public/message/message.html");
});
app.get("/login", (req, res) => {
  console.log(req.sessionID);
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/logout", (req, res) => {
  if (req.session.user && req.cookies.sid) {
    res.clearCookie("sid");
    res.redirect("/login");
  } else {
    res.redirect("/login");
  }
});
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect("/logedin");
    } else {
      if (req.session.user && req.cookies.sid) {
        res.clearCookie("sid");
        res.redirect("/login");
      } else {
        res.redirect("/login");
      }
    }
  });
});
module.exports = app;
const port = process.env.port || 3e3;
app.listen(port);
