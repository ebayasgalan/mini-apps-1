const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'client')));

app.post('/', (req, res) => {
  console.log('req: ', req.body);
  res.send('done');
})

app.listen(3000, () => {console.log('app is listening on http://localhost:3000')});

// {
//   "employee": {
//       "name":       "sonoo",
//       "salary":      56000,
//       "married":    true
//   }
// }