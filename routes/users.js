const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const uc = new UserController()
router.get('/users', (request, response) => {
    uc.getAllUsers((err, users)=>{
        if(err) response.sendStatus(500).json({err: err.message})
        response.send(users);
    })
})

router.post('/users', (request, response)=>{
    uc.saveNewUser(request.body, (err, doc)=>{
        if(err) response.sendStatus(500).json({err: err.message})
        response.send(doc)
    })
})

router.patch('/users/:id', (request, response) =>{
    let id = request.params.id;
    let body = request.body;
    uc.updateUser(id, body, (err,resp)=>{
        if(err) response.sendStatus(500).json({err: err.message})
        response.send(resp)
    })
})

router.delete('/users/:id', (request,response)=>{
    uc.deleteUser(request.params.id, (err, resp)=>{
        if(err) response.sendStatus(500).json({err: err.message})
        response.send(resp)
    })
})

module.exports = router;

