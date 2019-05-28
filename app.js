const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
const port = 7000;
const mongoLink = "mongodb://qwerty:qwerty-1admin1@ds039027.mlab.com:39027/meana"
const userRoute = require("./routes/users")
const notesRoute = require("./routes/notes")
const indexRoute = require("./routes/index")
//Use Body Parser to expose request to req.body
app.use(bodyParser.json());

app.use(indexRoute)
app.use(userRoute)
app.use(notesRoute)

mongoose.connect(mongoLink, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (err)=> {
    console.error(err);
})
db.once('open',()=>{
    app.listen(port, (err) => {
        if(err) throw err
        console.log(`App running on port : ${port}`)
    })
})


