// import mongoose
const mongoose=require('mongoose')

// create schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

// create model
const usermodel=mongoose.model("users",userSchema)

module.exports=usermodel