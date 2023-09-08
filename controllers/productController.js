require('../model/product.model')
const express=require ('express')
const router= express.Router()
const mongoose=require('mongoose')
const product=mongoose.model('products')
router.get('/',(req,res)=>{
    res.send({msg:'controller working'})
})

router.get('/searchProduct',(req,res)=>{
    var query=req.query
    var keys = Object.keys(query)
    console.log(keys)
    if(keys[0] === 'title')
    {
        const regexPattern = `\\b${query[keys]}\\b`;
        console.log(regexPattern)
        const queryTitle = { title: { $regex: regexPattern } };

        product.find(queryTitle)
        .then((data)=>{
            res.send({result : data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    else{
        product.find(query)
        .then((data)=>{
            res.send({result : data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }
})
module.exports=router;