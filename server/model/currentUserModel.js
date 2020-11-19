var mongoose= require("mongoose");
mongoose.pluralize(null);
var currentUserSchema = mongoose.Schema;

var currentUserSchemaRef = new currentUserSchema({userName:String},{ versionKey: false });
    
var currentUser=mongoose.model("currentUsers",currentUserSchemaRef);
module.exports=currentUser;

