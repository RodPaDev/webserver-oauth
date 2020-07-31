const express = require("express");
const passport = require("passport");
const helmet = require("helmet");
const server = express();

require("dotenv").config();
require("./passport-config");

server.use(helmet());

server.get("/", (req, res) => res.send("Web Server On"));

server.get("/authorized", (req, res) => res.send("Login Succeeded"));
server.get("/fail", (req, res) => res.send("Login Failed"));

server.get(
  "/oauth",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/drive.file", "email"],
    accessType: "offline",
    approvalPrompt: "force",
  })
);

server.get(
  "/oauth/callback",
  passport.authenticate("google", {
    successRedirect: "/authorized",
    failureRedirect: "/fail",
    failureFlash: true,
    failWithError: true,
  })
);

module.exports = server;
