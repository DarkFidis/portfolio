const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  email: string,
  name: string,
  password: string
});

const User = mongoose.model('User', userSchema);

module.exports = User;
