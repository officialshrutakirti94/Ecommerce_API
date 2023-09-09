const mongoose=require ('mongoose');
const registrationSchema= new mongoose.Schema({
    uname:String,
    emailid:String,
    pass:String,
    confirmPass:String
    
})
mongoose.model('users',registrationSchema)