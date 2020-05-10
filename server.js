let app  = require("http");

let server = app.createServer(function(req,res){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.setHeader("Access-Control-Allow-Origin","*");

    // 发送响应数据 "Hello World"
    if(req.url === "/api"){
        res.end(JSON.stringify([
            {id:111, name: "zt"},
            {id:222, name: "zt2"},
            {id:33, name: "zt3"},
            {id:33, name: "zt3"},
            {id:33, name: "zt3"}
        ]));
    }else{
        res.end('Not Found 200');
    }
})

server.listen(3000,function(){
    console.log("服务器已经连接！");
})
