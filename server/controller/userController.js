var userModel = require("../model/userModel.js");
var checkUser = function (req, res) {

    var userToBeChecked = req.body;
    //var role = undefined;
console.log("This is the "+userToBeChecked.userName);
    userModel.find({ userName: userToBeChecked.userName, password: userToBeChecked.password }, (err, result) => {
        if (err) {
            res.status(500);
            res.json({ message: err });
        }
        else {
            if (result) {
                console.log(result);
                if (result[0].role === 'admin') {
                    res.status(200);
                    res.json({ message: true, isAdmin: true });
                }
                else {
                    res.status(200);
                    res.json({ message: true, isAdmin: false });
                }

            }
            else {
                res.status(201);
                res.json({ message: false });
            }
        }
    })
}
var addNewUser = function (req, res) {
    var userToBeInserted = req.body;
    var user = {
        name: userToBeInserted.name,
        userName: userToBeInserted.userName,
        password: userToBeInserted.password,
        email: userToBeInserted.email
    };
    console.log("In insert user", user);
    userModel.create(user, (err, result) => {
        if (err) {
            res.status(500);
            res.json({ message: err });
        }
        else {
            if (result) {
                //console.log("In usercontroller",result);
                res.status(200);
                res.json({ message: true });
            }
            else {
                res.status(201);
                res.json({ message: false });
            }
        }
    })
}



module.exports = { checkUser,addNewUser };
