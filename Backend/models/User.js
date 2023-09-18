const mongoose = require("mongoose");
const bcrypt =require("bcryptjs")
const userSchema = mongoose.Schema({
  FirstName: {
    type: String,
    required: [true, "Fill All The Data"],
  },
  LastName: {
    type: String,

  },
  Email: {
    type: String,
    required: [true, "Fill All The Data"],
unique:[true,"User Aleready Exist"]
  },
  Phone: {
    type: Number,
    required: [true, "Fill All The Data"],

  },
  Password: {
    type: String,
    required: [true, "Fill All The Data"],

  },
  ShareData: {
    type: Boolean,
    required: [true, "Fill All The Data"],
    default:true
  },
  DailyData:[{
    type : mongoose.Schema.ObjectId,
    ref:"DailyData"
  }],
  Activity:[{
    type : mongoose.Schema.ObjectId,
    ref:"Activity"
  }]
});
userSchema.pre("save",async function(next){
  if (!this.isModified("Password")) {
     next();
  }else{
    this.Password= await bcrypt.hash(this.Password, 10);
    next();
    
  }
})
const user= mongoose.model("user",userSchema);
module.exports=user