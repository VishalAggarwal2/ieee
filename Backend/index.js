const express = require("express");
const cors = require("cors");
const app = express();
const monitorRouter= require("./routes/Monitoring");
const { createLogger, transports } = require("winston");
const LokiTransport = require("winston-loki");
const options = {

  transports: [
    new LokiTransport({
      host: "http://127.0.0.1:3100"
    })
  ]

};
const logger = createLogger(options);
app.use(express.json())

app.use(cors());
const dbconnection= require("./config/DB_Con");
dbconnection();
const {monitorMatrices}= require("./controllers/Monitoring");
const UserRouter= require("./routes/UserRoutes");
const dotenv= require("dotenv");
dotenv.config();
const ActivityRouter= require("./routes/ActivityRoutes");
app.use("/activity",ActivityRouter)
app.use("/user",UserRouter);
app.use("/monitor",monitorRouter);
app.get("/metrics",monitorMatrices)
app.get("/",(req,res)=>{
    res.send("crbon footprint nodejs")
})

const PORT =process.env.PORT
app.listen(PORT,()=>{
    console.log("App Stated at",PORT)
})