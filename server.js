const express = require('express');
const app = express();
const seinoscope = require('./seinoscope');

app.use(express.json());

app.get('/seinoscope', async (req, res) => {
  const mainCharacters = await seinoscope.getSign();
  res.status(200).json({ mainCharacters });
});

app.listen(5000, () => {
  console.log('Seinoscope listening on port 5000');
});
