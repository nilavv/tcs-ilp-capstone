var mongoose= require("mongoose");
mongoose.pluralize(null);
var userSchema = mongoose.Schema;

var userSchemaRef = new userSchema({name:String,userName:String,password:String,email:String,role:{type:String,default:"user"}},{ versionKey: false });
    
var User=mongoose.model("allUsers",userSchemaRef);
module.exports=User;
