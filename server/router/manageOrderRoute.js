var express=require("express");
var router=express.Router();

var manageOrderRoute=require("../controller/orderController.js");
//const { checkUser } = require("../controllers/userControllers");

//router.post("/",userController.checkUser);
router.post("/addOrder",manageOrderRoute.addOrder);
router.get("/getAllOrders",manageOrderRoute.getAllOrders);

module.exports=router;