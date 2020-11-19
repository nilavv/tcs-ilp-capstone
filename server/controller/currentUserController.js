//const currentUser = require("../model/currentUserModel.js");
var currentUserModel = require("../model/currentUserModel.js");
var insertUser = function(req,res){
    var userToBeInserted=req.body;
    var user={userName:userToBeInserted.userName};
    currentUserModel.create(user,(err,result)=>{
if(err){
    res.status(500);
    res.json({message:err});

}
else{if(result)
    {
        //console.log("In usercontroller",result);
        res.status(200);
        res.json({message:true});
    }
    else
    {
        res.status(201);
        res.json({message:false});
    }

}

    })

}

var getAllUsers = function(req,res){
    currentUserModel.find({},(err,result)=>{
        if(err)
        {
            res.status(500);
            res.json({message:"Error connecting to the server"});
        }
        else
        {
            console.log("Result of find all users",result);
            res.json(result);
        }
        
    })

}

var updateUser = function(req,res){

    var userToBeInserted=req.body;
    var user={userName:userToBeInserted.userName};
    var filterQuery={
        userName: "Guest"
    }
    var updateQuery={
        $set:{userName:user.userName}
    }
    console.log("In update user", user);
    currentUserModel.updateOne(filterQuery,updateQuery,(err,result)=>{
        if(err)
        {
            res.status(500);
            res.json({message:err});
        }
        else
        {
            if(result)
            {
                //console.log("In usercontroller",result);
                res.status(200);
                res.json({message:true});
            }
            else
            {
                res.status(201);
                res.json({message:false});
            }
        }
    })
}



module.exports={insertUser,getAllUsers,updateUser};