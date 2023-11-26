const http = require('http')
const fs = require('fs')
const express = require('express')

const  app = express()

app.use((req,res,next)=>{
    console.log('first middleware function')
    next()
})

app.use((req,res,next)=>{
    console.log('second middleware function')
    res.send("<h1>Hello expressJs</h1>")
})
app.listen(3000)