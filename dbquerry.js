var mongoose  = require('mongoose');

mongoose.connect('mongodb://xfry:m1p455w0rd@localhost:27017/myapp', function(err){
  if(err){
    console.log("Erroor: " + err);
  }
});

var UserSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String
});

var User = mongoose.model('users', UserSchema);
User.findOne({email: ''}, function(err, docs){
  if(err){
    console.log("Unexpected error: " + err)
  }
  console.log("Cursor docs: "+ docs);
});

console.log("The model created was: "+ User());