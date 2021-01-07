const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
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
  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zipcode: String,
    phone: Number
  },
  payment: {
    number: Number,
    expiration: Number,
    cvv: Number,
    zipcode: Number
  }
})

module.exports = mongoose.model('Addresses', addressSchema);