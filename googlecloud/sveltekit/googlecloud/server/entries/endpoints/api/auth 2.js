const router = require("express").Router();
require("express");
require("mongoose");
const bcrypt = require("bcrypt");
require("body-parser");
require("mustache");
require("mustache-express");
const crypto = require("crypto");
var forge = require("node-forge");
const User = require("../models/User");
router.post("/signup", (req, res, next) => {
  const { password, confirmpassword } = req.body;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  const username = req.body.username;
  const user_identity_id = crypto.randomBytes(16).toString("hex");
  console.log(user_identity_id);
  require("node-forge").pki;
  var rsa = forge.pki.rsa;
  rsa.generateKeyPair({ bits: 2048, workers: 1 }, function(err, keypair) {
    forge.pki.privateKeyToPem(keypair.privateKey);
    forge.pki.publicKeyToPem(keypair.publicKey);
  });
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const usersignup = new User({
        username,
        email,
        password: hash,
        phonenumber
      });
      usersignup.save().then((result) => {
        res.status(201).send();
        req.session.userId = User.userId;
        return res.redirect("/logedin");
      }).catch((err2) => {
        console.log(err2);
      });
    }
  });
});
router.post("/login", async (req, res, next) => {
  req.body.email;
  const password = req.body.password;
  const user = {
    email: req.body.email,
    password: req.body.password
  };
  User.find({ email: user.email }).exec().then((user2) => {
    if (user2.length < 1) {
      return res.status(401).json({
        message: "Auth failed"
      });
    }
    bcrypt.compare(password, user2[0].password, (err, result) => {
      if (err) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      if (result) {
        console.log(req.session);
        req.session.user = user2;
        res.redirect("/logedin");
        return res.status(200);
      }
      res.status(401).json({
        message: "Auth failed"
      });
    });
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});
module.exports = router;
