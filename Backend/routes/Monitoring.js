const express = require("express");
const monitorRouter = express.Router();
const {monitorMatrices}= require("../controllers/Monitoring");
monitorRouter.get("/",monitorMatrices);

module.exports=monitorRouter