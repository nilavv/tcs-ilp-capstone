var mongoose= require("mongoose");
mongoose.pluralize(null);
var paymentSchema = mongoose.Schema;

var paymentSchemaRef = new paymentSchema({address:String,city:String,creditCardNumber:String,cvv:String,email:String,expiryMonth:String,name:String,nameOnCard:String,orderList:String,state:String,totalPay:String,userName:String,zip:String},{ versionKey: false });
    
var Payment=mongoose.model("paymentHistory",paymentSchemaRef);
module.exports=Payment;
