var express=require("express");
//const itemControllers = require("../controllers/itemControllers");
var router=express.Router();

var itemControllers=require("../controller/itemController.js");
//const { checkUser } = require("../controllers/userControllers");

router.get("/",itemControllers.getAllItems);
//router.get("/",itemControllers.getAllItemsbyCategory);

module.exports=router;