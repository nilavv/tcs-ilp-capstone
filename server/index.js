var express= require("express");
var bodyParser= require("body-parser");

var cors=require("cors");


var itemRoute=require("./router/itemRoute.js");
var userRoute=require("./router/userRoute.js");
var manageUsersRoute=require("./router/manageUsersRoute.js");
var managepaymentRoute=require("./router/managePaymentRoute.js");
var manageOrderRoute=require("./router/manageOrderRoute.js");
var crudRoute=require("./router/crudRoute.js");
var signup=require("./router/signupRoute.js");
var PORT=3500;
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

var mongoose= require("mongoose");
var url ="mongodb://localhost:27017/eCommerce"


mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection;
mongoose.Promise=global.Promise;




app.use("/api/signup",signup);
app.use("/api/login",userRoute);
app.use("/api/home",itemRoute);
app.use("/api/user",manageUsersRoute);
app.use("/api/payment",managepaymentRoute);
app.use("/api/order",manageOrderRoute);
app.use("/api/admin",crudRoute);
app.listen(PORT,(err)=>{
    if(!err)
    {
        console.log(`Serever is running at PORT ${PORT}`);
    }
})