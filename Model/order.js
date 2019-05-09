const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    item : {},
    price : Number,
    OrderNo : Number
})
const Item = mongoose.model('Item',Schema)
module.exports = Item ;