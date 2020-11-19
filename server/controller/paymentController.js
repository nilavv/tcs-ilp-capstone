var paymentModel=require("../model/paymentModel.js");
var addPayment = function(req,res){
    var itemToBeInserted=req.body;
                    var order={
                        userName:itemToBeInserted.currentUsername,
                        orderList:itemToBeInserted.cardArr,
                        totalPay:itemToBeInserted.totalSum,
                        name:itemToBeInserted.name,
                        email:itemToBeInserted.email,
                        address:itemToBeInserted.address,
                        city:itemToBeInserted.city,
                        state:itemToBeInserted.state,
                        zip:itemToBeInserted.zip,
                        nameOnCard:itemToBeInserted.nameOnCard,
                        creditCardNumber:itemToBeInserted.creditCardNumber,
                        expiryMonth:itemToBeInserted.expiryMonth,
                        expiryYear:itemToBeInserted.expiryYear,
                        cvv:itemToBeInserted.cvv
                      }
                    console.log("In add payment");
                    paymentModel.create(order,(err,result)=>{
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
module.exports={addPayment};