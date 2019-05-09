let Controller = require("../Controller/control.js")
module.exports = (app)=>{
    app.get('/',Controller.main)
    app.post('/order',Controller.order)
    app.get('/add',Controller.add)
    app.post('/add/staff',Controller.staff)
    app.get('/addmem',Controller.addmem)
    app.post('/add/member',Controller.member)
    app.get('/del',Controller.del)
    app.post('/search',Controller.search)
    app.post('/search1',Controller.search1)
}