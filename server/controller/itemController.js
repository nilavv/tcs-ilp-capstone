
var itemmodel = require("../model/itemModel.js");
var getAllItems = function(req,res){

    itemmodel.find({},(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    })
}

var addItem=function(req,res){
    var itemToBeInserted= req.body;
    var item={
        itemId:itemToBeInserted.itemId,
        itemName:itemToBeInserted.itemName,
        itemCategory:itemToBeInserted.itemCategory,
        itemDescription:itemToBeInserted.itemDescription,
        itemPrice:itemToBeInserted.itemPrice,
        itemImageName:itemToBeInserted.itemImageName,
    };
    itemmodel.create(item,(err,result)=>{
        if(err)
        {
            res.status(500);
            res.json({message:err});
        }
        else
        {
            if(result)
            {
                console.log("In usercontroller",result);
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
var updateItem=function(req,res){ 
    var itemToBeInserted = req.body;
itemmodel.update({itemId:req.body.itemId},{$set:{itemName:itemToBeInserted.itemName,itemCategory:itemToBeInserted.itemCategory ,itemDescription:itemToBeInserted.itemDescription, itemPrice:itemToBeInserted.itemPrice
}},(err,result)=>{
    if(err)
    {
        res.status(500);
        res.json({message:err});
    }
    else
    {
        if(result.nModified>0){
            res.json({"msg":"REcord updated successfully"})
        }else {
            res.json({"msg":"REcord didn't update"})
        }
    }
})



}
var deleteItem=function(req,res){
    var itemsToFind = req.body;
    itemmodel.deleteOne({ itemId:itemsToFind.itemId }, function (err) {
        if (err) return handleError(err);
        
      });
}

var getAllItemsbyCategory = function(req,res){
    var itemsToFind = req.body;
    itemmodel.find({itemCategory:itemsToFind.itemCategory}).toArray((err,data)=>{
        if (err){
            res.status(500);
            res.json({message:"Error Connecting"});
        }
        else{
            res.json(data);
        }
    })
}
module.exports={getAllItems,addItem,updateItem,deleteItem,getAllItemsbyCategory};
