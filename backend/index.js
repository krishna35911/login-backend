// import dotenv
require('dotenv').config()

// import express
const express=require('express')

// import cors
const cors=require('cors')

// import router
const router=require('./router')

// import connection file
require('./connectionfile')

// create server
const loginserver=express()

// use cors by server
loginserver.use(cors())

// middleware that converts json to javascript object
loginserver.use(express.json())

// use router
loginserver.use(router)

// loginserver.use('/fileuploads',express.static('./fileuploads'))


// port
const PORT=4000 || process.env.PORT

// run server
loginserver.listen(PORT,()=>
{
    console.log(`server is running succesfully at port number ${PORT}`);
})

// get request
loginserver.get('/',(req,res)=>
{
    res.send('post request')
})