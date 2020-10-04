const express = require('express');
const app = express();
const seinoscope = require('./seinoscope');

app.use(express.json());

app.get('/api/seinoscope', async (req, res) => {
  const mainCharacters = await seinoscope.getSign();
  res.status(200).json({ mainCharacters });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
