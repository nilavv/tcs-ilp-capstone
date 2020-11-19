var mongoose= require("mongoose");
mongoose.pluralize(null);
var orderSchema = mongoose.Schema;

var orderSchemaRef = new orderSchema({itemId:Number,itemName:String,itemCategory:String,itemDescription:String,itemPrice:Number,itemImageName:String,itemQuantity:Number},{ versionKey: false });
    
var Order=mongoose.model("currentOrders",orderSchemaRef);
module.exports=Order;
