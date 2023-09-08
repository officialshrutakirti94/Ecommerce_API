require('../model/product.model')
const express=require ('express')
const router= express.Router()
const mongoose=require('mongoose')
const product=mongoose.model('products')
// router.get('/',(req,res)=>{
//     res.send({msg:'controller working'})
// })

router.get('/searchProduct',(req,res)=>{
   product.find()
   .then((result)=>{
    res.send({data:result})
    console.log(data)
   })
})
module.exports=router;