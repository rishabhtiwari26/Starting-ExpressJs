const http = require('http')
const fs = require('fs')
const express = require('express')
const bodyParser=require('body-parser')
const adminRouter= require('./routes/admin')
const shopRouter=require('./routes/shop')

const  app = express()

app.use(bodyParser.urlencoded())

app.use('/admin',adminRouter)

app.use(shopRouter)


app.listen(3000)