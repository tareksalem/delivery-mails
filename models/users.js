const mongoose = require("mongoose");
mongoose.connect("mongodb://tarek:tarek@ds117156.mlab.com:17156/emails");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    confirmPassword: {type: String, required: true},
    passwordResetToken: {type: String, default: ""},
    passwordResetExpires: {type: String, default: Date.now},
    role: {type: String, required: true},
    activateExpires: {type: String},
    userPhone: {type: Number, required: false}
});
userSchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
var Useer = module.exports = mongoose.model("users", userSchema, "users");
