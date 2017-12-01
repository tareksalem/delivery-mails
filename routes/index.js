const express = require('express');
const passport = require("passport");
const router = express.Router();
const nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const async = require("async");
const crypto = require("crypto");
var Email = require("../models/emails");
/*router.use("/", isLoggedIn, function (req, res, next) {
    next();
});*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home', titleSite: "delivery mails.com", error: req.flash("error"), success: req.flash("success")});
});
//router for getting signup page
router.get("/signup", function (req, res, next) {
    res.render("signup", {titleSite: "delivery mails.com", title: "signup", success: req.flash("success"), error: req.flash("error")});
});
//router to post sign up
router.post("/signup", passport.authenticate("local.signup", {
    failureRedirect: "/signup",
    successRedirect: "/users/complete",
    failureFlash: true
}));
//router for get login page
router.get("/login", function (req, res, next) {
    res.render("login", {titleSite: "delivery mails.com", title: "login", success: req.flash("success"), error: req.flash("error")});
});
//router to post login
router.post("/login", passport.authenticate("local.login", {
    failureRedirect: "/login",
    successRedirect: "/users/dashboard",
    failureFlash: true
}), function (req, res) {
    if (req.body.rememberme) {
        req.session.cookie.maxAge = 7 * 24 * 60 * 1000;
    } else {
        req.session.cookie.expires = null;
    }
});
//function to check if the user logeed in or not
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect("/users/dashboard");
    } else {
        return next();
    }
}
module.exports = router;

