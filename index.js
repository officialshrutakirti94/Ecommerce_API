require('./model/db')
const express=require ('express')
const mongoose=require('mongoose')
const product=mongoose.model('products')
const productController=require('./controllers/productController')
const user=mongoose.model('users')
const app=express()
const bodyParser=require('body-parser')

const session = require('express-session');
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use('/product',productController)
app.set('view engine','ejs')
app.use(session({
    secret:"magic",
    saveUninitialized:true,
    resave:false
}));

app.get('/',(req,res)=>{
    product.find()
    .then((result)=>{
        res.render('home',{data:result})
    })
    
})

app.post('/register',(req,res)=>{
    var x=new user(req.body)
    x.save()
    .then((result)=>{
        console.log('data fetched')
        res.render('signup',{msg:'success'})
    })
    console.log(x)
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})
app.get('/signin',(req,res)=>{
    res.render('signin')
})
app.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})
app.listen(3000,(res,req)=>{
    console.log('server is online')
})