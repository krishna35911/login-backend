const usermodel=require('./userschema')
const userdetailsmodel=require('./userdetails')

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

// add userdetails
exports.adddetails=async(req,res)=>
{
    const photo=req.file.filename
    const {name,email,address,gender,password,dob,phone,qualification}=req.body

    try {
          
        const newdetails=new userdetailsmodel({
            name,email,address,gender,password,dob,phone,qualification,photo
        })
        await newdetails.save()
        res.status(200).json(newdetails)
    } catch (error) {
        res.status(401).json(`${error}`)
    }
}

// edit password
exports.edituserprofile = async (req, res) => {
    const { username,password, newPassword } = req.body;  
    try {
      const user = await usermodel.findOne({ username,password });
        console.log(user);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      user.password = newPassword;
  
      const updatedUser = await user.save();
  
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(401).json(`${err}`);
    }
  };
  