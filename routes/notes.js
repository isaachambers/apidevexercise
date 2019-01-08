const express  = require('express')
const router = express.Router()
router.get('/notes/:id', (request, response)=>{
    let notes = [ 
    { text: "Example Text", due : new Date()},
    { text: "Example Text", due : new Date()},
    { text: "Example Text", due : new Date()}]
    response.send(notes)
})
module.exports = router;