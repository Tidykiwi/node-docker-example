'use strict';

const express = require('express');

// Constants
const PORT = 80;
//const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/health', (req, res) => {
  res.status(200);
  res.send('Healthy!');
})

app.listen(PORT);
console.log(`Running on http://${PORT}`);