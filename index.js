const express = require('express');
const { resolve } = require('path');
const index = require('./routes/index');
const app = express();
const port = 3010;

app.use(express.static('static'));
app.use('/', index);

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
app.post('/login', (req, res, next) => {
  console.log('/login : ', req.body);
  res.send('success');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
