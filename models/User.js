const mongoose = require('mongoose');
const userSchema = mongoose.Schema( {
    firstName : { type : String},
    secondName : { type : String},
    description : { type : String},
    createDate : { type : Date , default :  Date.now()},
    isActive : { type : Boolean, default : true}
})

module.exports = mongoose.model('User', userSchema);