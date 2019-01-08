const express  = require('express')
const router = express.Router()
const NoteController = require('../controllers/NotesController')
const noteController = new NoteController();
router.get('/notes/:id', (request, response)=>{
    noteController.getUserNotes(request.params.id, function(err, docs){
        if(err) response.sendStatus(500).json({ error : err.message})
        response.send(docs)
    })
})
router.post('/notes', (request, response) =>{
    noteController.saveUserNotes(request.body, function(err,doc){
        if(err) response.sendStatus(500).json({ error : err.message})
        response.send(doc)
    })
})

router.delete('/notes/:id', (request, response)=>{
    noteController.delete(request.params.id, function(err,resp){
        if(err) response.sendStatus(500).json({ error : err.message})
        response.send(resp)
    })
})

router.patch('/patch/:id',(request, response)=>{
    noteController.updateNote(request.params.id, request.body, function (err, resp){
        if(err) response.sendStatus(500).json({ error : err.message})
        response.send(resp)
    })
    
})
module.exports = router;