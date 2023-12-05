const express = require('express')
const router = express.Router();
const path=require('path')
const rootDir=require('../util/path')


router.get('/add-product',(req,res,next)=>{
    console.log('second middleware function')
    res.sendFile(path.join(rootDir,'views','add-product.htm'))
})
router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})


module.exports=router