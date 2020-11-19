var express=require("express");
var router=express.Router();

var managePaymentController=require("../controller/paymentController.js");

router.post("/addnewpayment",managePaymentController.addPayment);

module.exports=router;