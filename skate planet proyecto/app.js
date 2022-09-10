const express = require('express');
const methodOverride = require("method-override"); // Pasar poder usar los métodos PUT y DELETE
const path = require("path");
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

app.set('view engine','ejs')
app.set("views", path.join(__dirname, "/views")); // Define la ubicación de la carpeta de las Vistas


const mainRouter = require("./routers/main.js");
const productRouter = require("./routers/products.js")

app.use("/", mainRouter);
app.use("/products", productRouter);






app.listen(3030, ()=>{
    console.log('Servidor 3030 funcionando');
});

