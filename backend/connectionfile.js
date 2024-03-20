// import mongoose
const mongoose=require('mongoose')

// get connection string from process.env
const connectionstring=process.env.DATABASE_URL

// Connect mongodb using mongoose
mongoose.connect(connectionstring).then(()=>
{
    console.log('mongodb connected succesfully');
}).catch((err)=>
{
    console.log(`mongodb connection failed due to ${err}`);
})