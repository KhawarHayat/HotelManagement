const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    firstname : String,
    lastname : String,
    firstnamef : String,
    lastnamef : String,
    age : Number,
    cnic : String,
    member : String
})
const Member = mongoose.model('Member',Schema)
module.exports = Member ;