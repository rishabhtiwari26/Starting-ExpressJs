const http = require('http')
const fs = require('fs')
const express = require('express')
const bodyParser=require('body-parser')
const adminRouter= require('./routes/admin')
const shopRouter=require('./routes/shop')
const path=require('path')



const  app = express()


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRouter)

app.use(shopRouter)


app.listen(3000)