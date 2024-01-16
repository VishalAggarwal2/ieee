const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json())
app.use(cors());
const dbconnection= require("./config/DB_Con");
dbconnection();
const UserRouter= require("./routes/UserRoutes");
const dotenv= require("dotenv");
dotenv.config();
const ActivityRouter= require("./routes/ActivityRoutes");
app.use("/activity",ActivityRouter)
app.use("/user",UserRouter);

app.get("/",(req,res)=>{
    res.send("crbon footprint")
})
const PORT =process.env.PORT
app.listen(PORT,()=>{
    console.log("App Stated at",PORT)
})