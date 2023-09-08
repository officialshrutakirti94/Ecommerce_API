const mongoose=require ('mongoose');
const productSchema= new mongoose.Schema({
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    Image:String,
    rating:{
        rate:Number,
        count:Number
    }
    
})
mongoose.model('products',productSchema)