const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/passportlogin', { useNewUrlParser: true }).then(() => {
  console.log('connected to db');
});

const bcrypt = require('bcryptjs');

// userSchema
const UserSchema = mongoose.Schema({
  name: { type: String },
  username: { type: String },
  email: { type: String },
  password: { type: String }
});

// create a modal

const User = (module.exports = mongoose.model('User', UserSchema));

module.exports.registerUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) console.log(err);
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};
