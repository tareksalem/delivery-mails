const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/users");
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
function checkSignUp(req, res, next) {
    if (!req.body.username || !req.body.email || !req.body.password || !req.body.confirmpassword) {
        req.flash("error", "you should enter all fileds");
        res.redirect("/signup");
    } else {
        next();
    }
}
passport.use("local.signup", new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, function (req, email, password, done) {
        if (!req.body.username || !req.body.email || !req.body.password || !req.body.confirmpassword) {
            req.flash("error", "you should enter all fileds");
            res.redirect("/signup");
        } else {
            User.findOne({"email": email}, function (err, user) {
                if (err) {
                    console.log(err);
                }
                if (user) {
                    req.flash("error", "the user is already exist");
                    return done(null, false, {message: ""});
                }
                if (!user) {
                    var newUser = new User();
                    newUser.username = req.body.username;
                    newUser.password = newUser.encryptPassword(req.body.password);
                    newUser.email = req.body.email;
                    newUser.confirmPassword = newUser.encryptPassword(req.body.confirmPassword);
                    newUser.role = "user";
                    newUser.save(function (err) {
                        if (err) {
                            console.log(err);
                        }
                        req.flash("success", "the sign up done successfully");
                        return done(null, newUser);
                    });
                }
            });
        }
}));