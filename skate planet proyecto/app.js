const express = require('express');
const methodOverride = require("method-override"); // Pasar poder usar los métodos PUT y DELETE
const path = require("path");
const app = express();
var cookieParser = require("cookie-parser");

const mainRouter = require("./routers/main.js");
const productRouter = require("./routers/products.js")
const usersRouter = require("./routers/users");

const session = require("express-session");
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session({ secret: "secret", resave: false,
saveUninitialized: false, }));

app.use(express.json());
app.use(cookieParser());
app.use(userLoggedMiddleware);


app.set('view engine','ejs')
app.set("views", path.join(__dirname, "/views")); // Define la ubicación de la carpeta de las Vistas



app.use("/", mainRouter);
app.use("/products", productRouter);
app.use("/users", usersRouter);





app.listen(3040, ()=>{
    console.log('Servidor 3040 funcionando');
});

