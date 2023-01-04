const jwt = require ('jsonwebtoken')
const User = require('../models/user')

const authentication = (req,res,next)=>{
    try{
        const token = req.header('Authorization');
        console.log(token);
        const user = jwt.verify(token,'tauheed615adil02sohail12farhan22fsklfjslfjs8s8fsfslfsf88')
        }
    catch (err){
        console.log(err)
        return res.status(401).json({success:false})
    }
}

module.exports={
    authentication
}