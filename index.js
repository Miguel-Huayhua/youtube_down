const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors())
app.set('PORT',3000||process.env.PORT)

app.get('/',(req,res)=>{
    res.send('a la escucha')
})


app.listen(get('PORT'),()=>{
console.log('listo')
})