/** SERVIDOR BAUFEST - TAXI */

var express = require('express');

var cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 


// Registro de usuario
// solo en version de prueba: Se debe incoporar en un route -> usuario o user

app.post('/registrarUsuario',async function (req, res) {
  try{
    nombre=req.body.nombre;
    console.log("Se registra el usuario: "+ nombre);
    
    // Incorporar el usuario a la base de datos
    
    res.status(200).send();
  }
  catch(exception){
    res.status(400).send();
  }
});


const port = process.env.PORT || 3000;


const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});