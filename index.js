require('./model/db')
const express=require ('express')
const mongoose=require('mongoose')
const student=require('./model/student.model')
const product=mongoose.model('products')
const productController=require('./controllers/productController')
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use('/product',productController)
app.post('/saveDetails',(req,res)=>{
    var x=new student(req.body)
    x.save()
    .then(()=>{
        // console.log('data saved')
        res.send({msg:'data saved'})
    })
    .catch((err)=>console.log(err))
})

app.get('/find',(req,res)=>{
    student.find()
    .then((data)=>{
        res.send({msg:data})
    })
})
app.get('/searchByRoll',(req,res)=>{
    var roll=req.query.roll;
    var q={roll:roll}
    student.find(q)
    .then((result)=>{
        res.send({data:result})
    })
})

app.listen(3000,(res,req)=>{
    console.log('server is online')
})