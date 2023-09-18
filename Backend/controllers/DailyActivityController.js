const DailyData= require("../models/DailyData");
const User=require("../models/User");
const getalldailydata=async(req,res)=>{
    try{
const{Email}=req.body;
console.log(Email)
if(!Email){
    throw Error("Fill All The Data CareFully");
}else{
const get_user= await User.find({Email});
if(!get_user[0]){
    throw Error("User DoesNot Exist");
}
console.log(get_user)
    const daily = await DailyData.find({user:get_user[0]._id});
    res.json({daily})
}   
    }catch(e){

res.json({
    error:e.message,
    message:"issue in  geting daily data"
})
    }
}
module.exports={getalldailydata}