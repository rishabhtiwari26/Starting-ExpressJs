const http = require('http')
const fs = require('fs')
const express = require('express')
const bodyParser=require('body-parser')

const  app = express()

app.use(bodyParser.urlencoded())

app.use('/add-product',(req,res,next)=>{
    console.log('second middleware function')
    res.send("<h1>This is 'Add Product' Page</h1><form action='/product' method='POST'><input type='text' name='title'><input type='number' name='quantity'><button type='submit'>Add product</button></form> ")
})
app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    console.log('first middleware function'+req.originalUrl)
    res.send("<h1>This is Home Page</h1>")
    next()
    
})


app.listen(3000)