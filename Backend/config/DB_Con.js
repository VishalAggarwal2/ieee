const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
const Mongodburl = process.env.URL;
const dbconnection=async()=>{
try{

    mongoose.connect(Mongodburl).then(()=>{
        console.log("Data Base Connected Succ");
    }).catch((e)=>{
        console.log(e)
        console.log("Error Ouccured At Connectig DataBase")
    })
}catch(e){
    console.log("Error Ouccured At Connectig DataBase")

}
}
module.exports= dbconnection