var express=require("express");
var router=express.Router();

var manageUsers=require("../controller/currentUserController.js");

router.post("/",manageUsers.insertUser);
router.get("/currentusers",manageUsers.getAllUsers);
router.post("/loginUpdate",manageUsers.updateUser);



module.exports=router;