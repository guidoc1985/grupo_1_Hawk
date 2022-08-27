const express = require('express');
const mainRouter = require("./routers/main.js");
const app = express();

app.set('view engine','ejs')
app.use("/", mainRouter);
app.use(express.static('public'));


app.listen(3030, ()=>{
    console.log('Servidor 3030 funcionando');
});

