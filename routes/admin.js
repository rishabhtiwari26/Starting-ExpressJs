const express = require('express')
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    console.log('second middleware function')
    res.send("<h1>This is 'Add Product' Page</h1><form action='/admin/add-product' method='POST'><input type='text' name='title'><input type='number' name='quantity'><button type='submit'>Add product</button></form> ")
})
router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})


module.exports=router