const express = require('express');
const router = express.Router();
router.get('/', (request, response)=>{
    response.send("<h2>Welcome to API Development</h2>");
})
module.exports = router;
