const mongoose=require ('mongoose');
const studentSchema= new mongoose.Schema({
    roll:Number,
    name:String,
    stream:String,
    sem:String
})
mongoose.model('students',studentSchema)