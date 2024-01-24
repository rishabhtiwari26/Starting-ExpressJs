const path=require('path')
const rootDir=require('../util/path')

exports.getAddProducts=(req,res,next)=>{
    console.log('second middleware function')
    res.sendFile(path.join(rootDir,'views','add-product.htm'))
}

exports.postAddProducts=(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
}

exports.getProduct=(req,res,next)=>{
    console.log('first middleware function'+req.originalUrl)
    return res.sendFile(path.join(rootDir,'views','shop.htm'))
}

exports.success=(req,res,next)=>{
    console.log('inside success')
    res.send(`<h1>Success</h1>`)
}

exports.getContactUs=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.htm'))

}

exports.postContactUs=(req,res,next)=>{
    console.log(req.body)
    res.redirect('/success')
}

exports.pageNotFound=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','page-not-found.htm'))
}