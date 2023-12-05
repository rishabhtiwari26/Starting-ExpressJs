const express = require('express')
const router = express.Router();
const path=require('path')
const rootDir=require('../util/path')

router.get('/',(req,res,next)=>{
    console.log('first middleware function'+req.originalUrl)
    return res.sendFile(path.join(rootDir,'views','shop.htm'))
    
    
})
router.get('/success',(req,res,next)=>{
    console.log('inside success')
    res.send(`<h1>Success</h1>`)
})
router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.htm'))

})
router.post('/contactus',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/success')
})

router.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','page-not-found.htm'))
})

module.exports=router