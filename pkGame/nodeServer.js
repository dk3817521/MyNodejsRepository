const http = require('http')
const path = require('path')
const fs = require('fs')
let server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=='/'||req.url=='/index'){
        fs.readFile(path.join(__dirname,'gamepage','index.html'),(err,data)=>{
            if(err){
                throw err
            }else{
                res.end(data)
            }
        })
    }else if(req.url.indexOf('/node_modules'==0)){
        console.log(123);
        fs.readFile(path.join(__dirname,req.url),(err,data)=>{
            if(err){
                throw err
            }else{
                res.end(data)
            }
        })
    }
})
server.listen(3000,()=>{
    console.log('ok');
})