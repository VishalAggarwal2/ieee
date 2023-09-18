const mongoose = require("mongoose");
const GoalSchema=mongoose.Schema({
Date:{
    type:String
},
cfGoal:{
    type:Number

},
user:{
    type:mongoose.Schema.ObjectId,
    required:true,
    ref:"user"
},
cfActual:{
    type:Number
}
})
const Goal=mongoose.model("Goal",GoalSchema);
module.exports=Goal