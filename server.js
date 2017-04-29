/**
 * Created by Vadym Yatsyuk on 29.04.17
 */

let express = require('express');
let app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  const origin = req.get('origin');
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/points', (req, res) => {
  console.log(req.body);

  if (!req.body) {
    res.end();
  }

  const file = req.body.position === 'inner' ? 'inner.txt' : 'outer.txt';

  fs.appendFile(file, `\n${JSON.stringify(req.body.point)}`, err => {
    if (err) {
      console.error(err);
    }

    res.end();
  });
});

app.all('*', (req, res) => {
  res.end();
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});