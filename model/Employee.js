const mongoose=require('mongoose')
const empSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:[true,"Require Firstname"]
    },
    last_name:{
        type:String,
        required:[true,"Require  Lastname"]
    },
    email:{
        type:String,
        required:[true,"Require  Email"]
    },
    gender:{
        type:String,
        
    },
    salary:{
        type:String,
        required:[true,"Require"]
    }

})

const Emp_db=mongoose.model("employee",empSchema)
module.exports=Emp_db;