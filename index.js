const express = require("express");
const logger = require("morgan")
const bodyParser = require("body-parser")

const app = express();

app.use( logger("dev") ) // agregamos los middlewares con app.use. los midle siempre nos van a devolver funciones y app.use siempre va a esperar una fun
app.use( bodyParser.json() ) // para json
app.use( bodyParser.urlencoded({ extended: false }) ) //para urlencoded, 


require("./routes/views")(app);
require("./routes/special")(app);

console.log("Iniciando Express.js");
app.listen(3000, ()=>{
    console.log("Express ha iniciado correctamente!");
});