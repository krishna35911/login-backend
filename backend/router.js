const express=require('express')

const usercontroller=require('./usercontroller')

const router=new express.Router()

// register
router.post('/register',usercontroller.register)

// login
router.post('/login',usercontroller.login)


module.exports=router