const express = require('express');
const mainRouter = require("./routers/main.js");
const app = express();

app.use("/", mainRouter);
app.use(express.static('public'));


app.listen(3030, ()=>{
    console.log('Servidor funcionando');
});

