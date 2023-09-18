const user = require("../models/User");
const bcrypt= require("bcryptjs");
const Activity=require("../models/Activity");
const DailyData=require("../models/DailyData");

const signup=async(req,res)=>{
try{

const {FirstName,LastName,Email,Phone,Password,ShareData,Cpassword}=req.body;
if(!FirstName||!LastName||!Email||!Phone||!Password||!Cpassword){

throw Error("Fill All The Data CareFully");

}else{
    if(Password!=Cpassword){
        throw Error("Password Not Match");
    }
    const finduser = await user.findOne({Email});
    if(finduser){
throw Error("User Already Exist");
    }else{
        const saveduser= await user.create(req.body);
      res.status(200).json(saveduser);
    }

}
}catch(e){
res.status(400).json({
    message:"issue in losignup",
    error:e.message
})
}
}
// login 
const login=async(req,res)=>{
try{
    const {Email,Password}=req.body;
if(!Email||!Password){
    throw Error("Fill All The Data");
}else{
const findUser = await user.findOne({Email}).populate("DailyData").populate("Activity");
if(!findUser){
    throw Error("User Does Not Exist");
}else{
    const IsMatch=await bcrypt.compare(Password,findUser.Password);
    console.log(IsMatch);
    if(IsMatch){
        res.status(200).json(findUser)
    }
    else{
        throw Error("Password Not Match")
    }
}
}
}catch(e){
    res.status(400).json({
        message:"issue in losignup",
        error:e.message
    })
}


}
module.exports={login,signup}