let app  = require("http");
let mongoose = require('mongoose');
let dbconfig = require('./dbs/config');
let Person = require('./dbs/models/person')


mongoose.connect(dbconfig.dbs,{
	useNewUrlParser:true
})

let server = app.createServer(function(req,res){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    if(req.url==="/add"){
	const person = new Person({name:'lilei',age:14});
person.save();
	//POST req.request.body.name
	try{	
		
	}catch(e){

	}	
	//new Person.find({})  new Person.findOne({})  Person.where({id:1}).update({name:'ludashi'}); new Person({name:'lilei'}).remove()
    }
    // 发送响应数据 "Hello World"
    if(req.url === "/api"){
        res.end(JSON.stringify([
            {id:111, name: "zt"},
            {id:222, name: "zt2"},
            {id:333, name: "zt3"},
            {id:444, name: "zt4"}
        ]));
    }else{
        res.end('Not Found 200');
    }
})

server.listen(3000,function(){
    console.log("服务器已经连接！");
})
