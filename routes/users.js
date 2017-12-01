const express = require('express');
const router = express.Router();
const User = require("../models/users");
router.use("/", isNotLoggedIn, function (req, res, next) {
    next();
});
//get logout function
router.get("/logout", function (req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect("/");
});
/* GET users listing. */
router.get('/complete', function(req, res, next) {
    res.render('complete', { title: 'complete', titleSite: "delivery mails.com", error: req.flash("error"), success: req.flash("success")});
});
//get user setting page
router.get("/setting", function (req, res, netx) {
    res.render("./users/setting", {title: "my setting", titleSite: "delivery mails.com", user: req.user, error: req.flash("error"), success: req.flash("success")});
});
router.get("/dashboard", function (req, res, next) {
    res.render("./users/dashboard", {title: "dashboard", titleSite: "delivery mails.com"});
});
router.post("/useractivate", function (req, res, next) {
    req.flash("success", "good step, now the inforamtion has entered and we will activate your memebership in a few hours");
    User.findById(req.user.id, function (err, user) {
        if (err) {
            console.log(err);
        }
        if (user) {
            console.log(user);
        }
    });
    res.redirect("/users/dashboard");
});
//function to check the authentication of user
function isNotLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        res.redirect("/");
    } else {
        return next();
    }
}

module.exports = router;
