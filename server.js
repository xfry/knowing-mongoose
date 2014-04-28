var express   = require('express');
//Importando mongoose
var mongoose = require('mongoose')

//Conectandonos a la base de datos
// No olvides seguir la siguiente convención: 
// 'mongodb://nombre_de_usuario:contraseña_usuario@127.0.0.1/nombre_base_de_datos'
mongoose.connect('mongodb://xfry:m1p455w0rd@localhost:27017/myapp', function(err){
  if(err){
    console.log("Erroor: " + err);
  }
});

// Definimos el esquema de nuestra tabla
var UserSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  emai: String
});

//Definimos modelo a usar
var User = mongoose.model('users', UserSchema);

//Iniciamos nuestro servidor express
//Definimos las rutas de nuestra aplicación
var app = express();
app.get('/', function(req, res){
  res.send('Mostrar Usuarios');
});

app.get('/users', function(req, res){
  User.find({}, function(err, docs){
    res.json(docs);
  });
});

app.get('/users/:email', function(req, res){
  var myemail = req.params.email;
  if(myemail){
    User.find({email: myemail}, {email: 1, _id: 0}, function(err, docs){
      res.json(docs);
    });
  }
});

app.listen(3000);
console.log("Running server")