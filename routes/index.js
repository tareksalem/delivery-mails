const express = require('express');
const passport = require("passport");
const router = express.Router();
const nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const async = require("async");
const crypto = require("crypto");
var Email = require("../models/emails");
//function to check the inputs of signup
function checkSignUp(req, res, next) {
    if (!req.body.username || !req.body.email || !req.body.password || !req.body.confirmpassword) {
        req.flash("error", "you should enter all fileds");
        res.redirect("/signup");
    } else {
        next();
    }
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home', titleSite: "delivery mails.com", error: req.flash("error"), success: req.flash("success")});
});
//router for getting signup page
router.get("/signup", function (req, res, next) {
    res.render("signup", {titleSite: "delivery mails.com", title: "signup", success: req.flash("success"), error: req.flash("error")});
});
//router for get login page
router.get("/login", function (req, res, next) {
    res.render("login", {titleSite: "delivery mails.com", title: "login", success: req.flash("success"), error: req.flash("error")});
});
//router to post sign up
router.post("/signup", function (req, res, next) {
    passport.authenticate("local.signup", {
        failureRedirect: "/signup",
        successRedirect: "/complete",
        failureFlash: true
    })
});
module.exports = router;
