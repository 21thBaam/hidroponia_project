const usersController = {};
const user = require("../models/user");

usersController.getUsers = async (req, res) => {
    const users = await user.find();
    res.json(users);
}

usersController.addUser = async (req, res) => {
    const userAdd = await new user(req.body, (err) => {
        if(err){
            console.log(err);
            res.status(401).json({status: "Wrong Request"});
        }
    });
    await userAdd.save((err) => {
        if(!err){
            res.json({status: "User Added"});
        }else{
            console.log(err);
            res.status(401).json({status: "Wrong Request"});
        }
    });
}

module.exports = usersController;