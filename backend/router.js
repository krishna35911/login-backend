const express=require('express')

const usercontroller=require('./usercontroller')

const multerConfig=require('./multer')


const router=new express.Router()

// register
router.post('/register',usercontroller.register)

// login
router.post('/login',usercontroller.login)

router.post('/details',multerConfig.single('photo'),usercontroller.adddetails)

router.put('/user/edit',usercontroller.edituserprofile)


module.exports=router