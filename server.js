const express = require("express")
const mongoose = require("mongoose")
const mongodb = require("mongodb")
const bodyParser = require("body-parser")
const path = require("path")
const ejs = require("ejs")
const app = module.exports = express()

//Request from Client to route
require("./Route/route")(app)

//Set BodyParser
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:false}))

//Set Public 
app.set(express.static(path.join(__dirname,"public")))

// Set view engine
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

// app.post("/order",(req,res)=>{
// console.log(req.body)
// })


// Set Mongoose
mongoose.connect("mongodb://localhost:27017/hotel",{useNewUrlParser : true})
let db = mongoose.connection;
db.on("error",(err)=>{
   if(err) {console.log(err)}
})
db.once("open",()=>{
    console.log("Database Connected Successfully")
})


app.listen(3000,()=>{
    console.log("Server Started")
})