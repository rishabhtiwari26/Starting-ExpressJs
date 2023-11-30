const express = require('express')
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('first middleware function'+req.originalUrl)
    return res.send("<h1>This is Home Page</h1>")
    
    
})
router.use((req,res,next)=>{
    res.status(404).send('<h1>Page not Found</h1>')
})

module.exports=router