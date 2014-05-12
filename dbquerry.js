var mongoose  = require('mongoose');

mongoose.connect('mongodb://xfry:m1p455w0rd@localhost:27017/myapp', function(err){
  if(err){
    console.log("Erroor: " + err);
  }
});

var UserSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email:{type:String,required:true,unique:true},//added unique email for person and required for dafault 
  created:{type:Date,default:new Date(Date.now())},//when was created user and required for dafault
  password:{
    type:String,
    required:true,
    unique:true
    }//password very important added unique pass for person and required for dafault
    //I recommend hash password before save with middleware http://mongoosejs.com/docs/middleware.html
    //encript pass with https://github.com/ncb000gt/node.bcrypt.js/ 
    // or https://www.npmjs.org/package/crypto-js
    //or my module https://github.com/Maxtermax/encrypt-scrypt/tree/master
});

var User = mongoose.model('users', UserSchema);
User.findOne({email: ''}, function(err, docs){
  if(err){
    console.log("Unexpected error: " + err)
  }
  console.log("Cursor docs: "+ docs);
});

console.log("The model created was: "+ User());
