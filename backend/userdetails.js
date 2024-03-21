// import mongoose
const mongoose=require('mongoose')

// create schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
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
    password:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    qualification:{
        type:String,
        require:true
    },
    photo: {
        type: String,
        require: true,
      }
})

// create model
const userdetailsmodel=mongoose.model("userdetails",userSchema)

module.exports=userdetailsmodel