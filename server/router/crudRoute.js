var express=require("express");
//const itemControllers = require("../controllers/itemControllers");
var router=express.Router();

var itemControllers=require("../controller/itemController.js");
//const { checkUser } = require("../controllers/userControllers");

router.post("/addItem",itemControllers.addItem);
router.post("/deleteItem",itemControllers.deleteItem);
router.post("/updateItem",itemControllers.updateItem);
//router.get("/",itemControllers.getAllItemsbyCategory);

module.exports=router;