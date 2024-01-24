const express = require('express')
const router = express.Router();    
const productsController=require('../controller/products')

router.get('/',productsController.getProduct)

router.get('/success',productsController.success)

router.get('/contactus',productsController.getContactUs)

router.post('/contactus',productsController.postContactUs)

router.use(productsController.pageNotFound)

module.exports=router