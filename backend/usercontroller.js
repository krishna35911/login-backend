const usermodel=require('./userschema')

// Registration

exports.register=async(req,res)=>
{
    const {name,address,gender,username,password}=req.body
    try {
        const alreadyuser=await usermodel.findOne({username})
        if(alreadyuser)
        {
            res.status(406).json('Username already exist')
        }
        else
        {
            const newuser=new usermodel({
                name,address,gender,username,password
            })
            await newuser.save()
            res.status(200).json(newuser)
        }
    } catch (error) {
        res.status(401).json(`Request failed due to ${error}`)
    }
}

// Login

exports.login=async(req,res)=>
{
    const{username,password}=req.body
    try {
       const alreadyuser=await usermodel.findOne({username,password})

       if(alreadyuser){
        res.status(200).json({alreadyuser})
       } 
       else
       {
        res.status(404).json('Invalid email or password')
       }
    } catch (error) {
        res.status(401).json(`Request failed due to ${error}`)
    }
}