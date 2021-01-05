const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, 'client')));

app.post('/', (req, res) => {
  const body = req.body;
  console.log('body: ', body);
  res.send('done');
})

app.listen(3000, () => {console.log('app is listening on http://localhost:3000')});