const express = require("express");
const ActivityRouter = express.Router();
const {addactivity}=require("../controllers/ActivityController")
const{getalldailydata}= require("../controllers/DailyActivityController");
const {AddGoal,getAllGoal}=require("../controllers/GoalController")
ActivityRouter.post("/addactivity",addactivity)
ActivityRouter.post("/dailyactivity",getalldailydata)
ActivityRouter.post("/addgoal",AddGoal)
ActivityRouter.post("/getgoal",getAllGoal)
module.exports=ActivityRouter;