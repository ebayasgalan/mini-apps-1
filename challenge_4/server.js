const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true } ,() => {
  console.log('MongoDB connected');
});

app.listen(3000, () => {
  console.log('server is listening on http://localhost:3000');
});