const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  zipcode: String,
  phone: Number,
  card_number: Number,
  expiration: Number,
  cvv: Number,
  zipcode: Number
})

module.exports = mongoose.model('Users', UserSchema);