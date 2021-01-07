const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./backend/Routes/users');
require('dotenv').config({path: 'variables.env'});

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static('./public'));
app.use('/users', userRoute);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true } ,() => {
  console.log('MongoDB connected!');
})

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
})

