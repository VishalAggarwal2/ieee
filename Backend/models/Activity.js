const mongoose = require("mongoose");
const ActivitySchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    carbonFactor:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"user"
    },
    electricity:{
       type:Number
    },
    petrol:{
        type:Number

    },
    gas:{
        type:Number

    },
    diesel:{
        type:Number

    },
    paper:{
        type:Number

    },
    water:{
        type:Number

    },
    Date:{
        type:String,
        required:true,
    }
})
const Activity= mongoose.model("Activity",ActivitySchema);
module.exports= Activity