var express=require("express");
var router=express.Router();

var userController=require("../controller/userController.js");

router.post("/",userController.addNewUser);
module.exports=router;