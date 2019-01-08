const mongoose = require('mongoose')
const Note = require('../models/Note')
const notesController= function(){

}

notesController.prototype.getUserNotes = function(userId, callback){
    Note.find({author : userId}, callback)
}

notesController.prototype.saveUserNotes = function(noteData, callback){
    let note = new Note(noteData);
    note.save(callback)
}

notesController.prototype.delete = function(noteId, callback){
    Note.deleteOne({_id : noteId})
}

notesController.prototype.updateNote = function (id, params, callback){
    Note.updateOne({_id : id}, params, callback);
}

module.exports = notesController