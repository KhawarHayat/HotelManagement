let Order = require("../Model/order.js")
let Staff = require("../Model/staff.js")
let Member = require("../Model/member.js")
const bodyParser = require("body-parser")
var app = require('../server.js')
let OrderNo = 0;
app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:false}))

 exports.main=(req,res)=>{
     res.render("main.ejs")
 }
 exports.order=(req,res)=>{
     let Arr = {};
     let tprice = 0;
     let price = 0;
     for(var prop in req.body){
        if(req.body[prop] == 0){
         delete req.body[prop]
        }
     }
     for(var prop in req.body){
         if(prop == 'Karahi'){
             price = req.body[prop] * 800 ;
             tprice += price
         }
         if(prop == 'Handi'){
            price = req.body[prop] * 800 ;
            tprice += price
        }
        if(prop == 'Baryani'){
            price = req.body[prop] * 150 ;
            tprice += price
        }
        if(prop == 'Dunba'){
            price = req.body[prop] * 1500 ;
            tprice += price
        }
        if(prop == 'ChinesCarrot'){
            price = req.body[prop] * 800 ;
            tprice += price
        }
        if(prop == 'ChinesLoli'){
            price = req.body[prop] * 800 ;
            tprice += price
        }
        if(prop == 'ChinesRice'){
            price = req.body[prop] * 100 ;
            tprice += price
        }
        if(prop == 'Meeo'){
            price = req.body[prop] * 150 ;
            tprice += price
        }
        
     }

     Arr = req.body;
     console.log(Arr)
    Order1 = new Order({
        item : Arr,
        price : tprice,
        OrderNo : OrderNo++ 
    })
    Order1.save((err)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(tprice)
        }
    })

     
 } 
 exports.add = (req,res)=>{
     res.render("form.ejs")
 }
 exports.staff = (req,res)=>{
     const Staff1 = new Staff({
         firstname : req.body.firstname,
         lastname : req.body.lastname,
         firstnamef : req.body.firstnamef,
         lastnamef : req.body.lastnamef,
         age : req.body.age,
         cnic : req.body.cnic,
         post : req.body.post,
         sellery : req.body.sellery
     })
     Staff1.save((err)=>{
         if(err){console.log(err)}
         else{res.redirect('/add')}
     })
 }
 exports.addmem = (req,res)=>{
     res.render('member.ejs')
 }
 exports.member = (req,res)=>{
    const Member1 = new Member({
        firstname : req.body.firstname,
         lastname : req.body.lastname,
         firstnamef : req.body.firstnamef,
         lastnamef : req.body.lastnamef,
         age : req.body.age,
         cnic : req.body.cnic,
         member : req.body.member
    })
    Member1.save((err) => {
     if(err) {console.log(err)}
     else{res.redirect("/addmem")}
    })
 }
 exports.del = (req,res)=>{
     res.render('del.ejs')
 }
 exports.search = (req,res) => {
     Staff.find({firstname : req.body.name},(err,result)=>{
         if(err){console.log(err)}
            else{res.json(result)}
     })
 }
 exports.search1 = (req,res) => {
    Staff.findOneAndDelete({firstname : req.body.name},(err,result)=>{
        if(err){console.log(err)}
           else{res.json(result)}
    })
 }