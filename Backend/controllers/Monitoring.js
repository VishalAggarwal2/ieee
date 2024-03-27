const express = require("express");
const client = require("prom-client");
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({register: client.register})
const monitorMatrices = async(req,res)=>{
    res.setHeader("Content-Type",client.register.contentType)
    const metrices = await client.register.metrics();
res.send(metrices);
}

module.exports= {monitorMatrices}