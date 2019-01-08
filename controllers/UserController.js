const mongoose = require ('mongoose')
const User = require("../models/User")
const userController = function(){
}
userController.prototype.getAllUsers = function(callback){
    User.find().exec().then( (docs) => {
        callback(null, docs)
    }).catch( (error) => {
        callback (error)
    })
}

userController.prototype.saveNewUser = function(userJson,callback){
    let user  = new User(userJson);
    user.save(user, callback)
}

userController.prototype.updateUser = function(id,params, callback){
    User.updateOne({_id: id}, params,callback)
}

userController.prototype.deleteUser = function(userId, callback){
    User.deleteOne({_id: userId}, callback)
}




module.exports = userController;
