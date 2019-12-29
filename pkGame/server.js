const express = require('express')
let app=express()
var bodyParser = require('body-parser');
app.use(express.static('gamepage'))
app.use(express.static('node_modules'))
app.get('/index',(req,res)=>{
    res.sendFile(__dirname+'/gamepage/index.html',(err,data)=>{
        if(err){
            throw err;
        }else{
            res.send(data);
        }
    })
})

app.get('/message',(req,res)=>{
    console.log(req.url);
    console.log('message click');
    let message='hello'
    res.send({message:'hello'})
})
app.get('/sendmessage',(req,res)=>{
    let {message} = req.query
    console.log(message);
    console.log({message});
    res.send({message})
})
app.listen(3000,()=>{
    console.log('gaoding');
})