const mongoose = require("mongoose");
const DailySchema = mongoose.Schema({
   
    carbonFactorTotal:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"user"
    },
    Date:{
        type:String,
        required:true,

    }
})
const DailyData= mongoose.model("DailyData",DailySchema);
module.exports= DailyData