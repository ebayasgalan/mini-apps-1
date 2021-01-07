const express = require('express');
const router = express.Router();
const User = require('../Models/user');

router.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.post('/', async (req, res) => {
  await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    line1: req.body.line1,
    line2: req.body.line2,
    phone: req.body.phone,
    city: req.body.city,
    card_number: req.body.card_number,
    expiration: req.body.expiration,
    cvv: req.body.cvv,
    zipcode: req.body.zipcode
  });
  res.send('data created');
});

module.exports = router;