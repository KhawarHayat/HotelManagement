const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    firstname : String,
    lastname : String,
    firstnamef : String,
    lastnamef : String,
    age : Number,
    cnic : String,
    post : String,
    sellery : Number
})
const Staff = mongoose.model('Staff',Schema)
module.exports = Staff ;