const express = require('express');
const bodyParser = require('body-parser');
var operaciones = require('./operaciones');
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json("Hola Mundo!!");
});

app.get('/factorial/:numero', function(req, res) {   
    if(isNaN(req.params.numero) || parseInt(req.params.numero) < 0) {
    res.json({
        numero:req.params.numero,
        resultado:"Numero Invalido!!",
        version:"1.0"
    });    
}

    res.json({
        numero:req.params.numero,
        resultado:operaciones.factorialRecursivo(req.params.numero),
        version:"1.0"
    });    
});


// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
