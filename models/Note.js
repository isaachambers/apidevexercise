const mongoose  = require('mongoose');
const notesScema = mongoose.Schema({
    author : { type : mongoose.Schema.Types.ObjectId, ref : "User" },
    title : { type : String},
    info : { type : String },
    due : { type : Date , default : Date.now()}
})
module.exports = mongoose.model('Note',notesScema);