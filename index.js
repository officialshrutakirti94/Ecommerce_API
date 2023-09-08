require('./model/db')
const express=require ('express')
const mongoose=require('mongoose')
const product=mongoose.model('products')
const productController=require('./controllers/productController')
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use('/product',productController)
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    product.find()
    .then((result)=>{
        res.render('home',{data:result})
    })
    
})
app.listen(3000,(res,req)=>{
    console.log('server is online')
})