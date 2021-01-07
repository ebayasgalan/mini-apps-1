const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    required: true
  },
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