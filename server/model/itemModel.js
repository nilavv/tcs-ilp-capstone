var mongoose= require("mongoose");
mongoose.pluralize(null);
var itemSchema = mongoose.Schema;

var itemSchemaRef = new itemSchema({itemId:Number,itemName:String,itemCategory:String,itemDescription:String,itemPrice:Number,itemImageName:String},{ versionKey: false });
    
var Item=mongoose.model("itemsColl",itemSchemaRef);
module.exports=Item;

