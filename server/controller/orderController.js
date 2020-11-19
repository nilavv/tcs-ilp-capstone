var orderModel = require("../model/orderModel.js");
var addOrder=function(req,res){

    var itemToBeInserted=req.body;
                    var item={
                        itemId:itemToBeInserted.itemId,
                        itemName:itemToBeInserted.itemName,
                        itemCategory:itemToBeInserted.itemCategory,
                        itemDescription:itemToBeInserted.itemDescription,
                        itemPrice:itemToBeInserted.itemPrice,
                        itemImageName:itemToBeInserted.itemImageName,
                        itemQuantity:itemToBeInserted.itemQuantity
                    };
                    console.log("In add order");
                    orderModel.create(item,(err,result)=>{
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
var getAllOrders=function(req,res){


    orderModel.find({},(err,data)=>{ if(err)
        {
            res.status(500);
            res.json({message:"Error connecting to the server"});
        }
        else
        {
            console.log("Result of find all orders",data);
            res.json(data);
        }})

    

}

module.exports={addOrder,getAllOrders};