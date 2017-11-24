const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const emailSchema = new Schema({
    email: {type: String, required: true}
});
var Email = module.exports = mongoose.model("emails", emailSchema, "emails");
