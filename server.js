const express = require('express');
const app = express();
const seinoscope = require('./seinoscope');

app.use(express.json());

app.get('/api/seinoscope', async (req, res) => {
  const signReading = await seinoscope.getSign(req.query);
  res.status(200).json({ signReading });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
