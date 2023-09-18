const Goal=require("../models/Goal");
const DailyData=require("../models/DailyData");

const AddGoal=async(req,res)=>{
    try{
        const{Date,cfGoal,user}=req.body;
        if(!Date||!cfGoal||!user){
            throw Error("Pls Fill All The Data CareFully");
        }else{
            let findDailyData = await DailyData.findOne({$and: [{ Date: Date },{user:user}]});
            console.log(findDailyData)
            if(!findDailyData){
             var  cfActual= 0;
             const savedGoal= await Goal.create({
                Date:Date,
                cfGoal:cfGoal,
                user:user,
                cfActual:cfActual
             })

             res.json(savedGoal)
            }else{
                var  cfActual= findDailyData.carbonFactorTotal;
                const savedGoal= await Goal.create({
                   Date:Date,
                   cfGoal:cfGoal,
                   user:user,
                   cfActual:cfActual
                })
   
                res.json(savedGoal);
            }
        }
    }catch(e){
        res.status(400).json({
            error: e.message,
            message: "Issue at adding the activity",
          });
    }

}

const getAllGoal=async(req,res)=>{
try{
const{user}=req.body;
if(!user){
    throw Error("Fill All The Data CareFully");
}else{
    const allGoal=await Goal.find({user});
    res.json(allGoal)
}
}catch(e){
    res.status(400).json({
        error: e.message,
        message: "Issue at adding the activity",
      });
}

}
module.exports={AddGoal,getAllGoal}