

// import user from "../models/userSchema.js";
const user = require("../models/userSchema.js")

 const userSignup = async(req,res)=>{
     try{
    
       const data =  await  user.create(req.body);
        res.status(200).json({msg:'user registered successfully', data})
     }
     catch(error){
           console.log('Error while inserting default data', error.message);
     }
    }
module.exports = {userSignup}
