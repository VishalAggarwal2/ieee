const express= require("express");
const UserRouter = express.Router();
const {login,signup}=require("../controllers/UserController")
UserRouter.post("/login",login);
UserRouter.post("/signup",signup);

module.exports= UserRouter;