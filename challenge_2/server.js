const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static(path.join(__dirname, 'client')));

app.post('/', (req, res) => {
  let outputString = '';
  const data = JSON.parse(req.body.userdata);
  const entries = Object.entries(data);
  const childCheck = (children, endResult) => {
    console.log('length: ', children.length);
    console.log('out: ', children.firstName);
    for (let i = 0; i < children.length; i++) {
      console.log(children[i].firstName);
      endResult += children[i];
      // if(collection[i] === 'children') {
      //   innerFunc()
      // }
    }
  }
  const keys = Object.keys(data);
  // adding the keys to the result
  for (let i = 0; i < keys.length; i++) {
    if(i === 0) {
      outputString += keys[i];
      continue;
    }
    outputString += `,${keys[i]}`
    if(keys[i+1] === 'children') {
      outputString += '\n';
      break;
    }
  }
  // console.log('parsed data: ', data);
  // console.log('keys: ', keys);
  // console.log('entries: ', entries);
  console.log('output: ', outputString);
  res.send(data);
})

app.listen(3000, () => {console.log('app is listening on http://localhost:3000')});
