/**
 * Created by Vadym Yatsyuk on 29.04.17
 */

let express = require('express');
let app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

app.post('/points', function (req, res) {
  console.log(req.body);

  if (!req.body) {
    res.end();
  }

  const file = req.body.position === 'inner' ? 'inner.txt' : 'outer.txt';
  fs.appendFileSync(file, `\n${ JSON.stringify(req.body.point)}`);

  res.end();
});

app.listen(port, function () {
  console.log(`Server is listening on port ${ port }`);
});