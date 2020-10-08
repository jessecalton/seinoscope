const express = require('express');
const app = express();
const seinoscope = require('./seinoscope');

app.use(express.json());

app.get('/api/seinoscope', async (req, res) => {
  const signReading = await seinoscope.getSign(req.query);
  res.status(200).json({ signReading });
});

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  // This is anything that is not the aforementioned backend routes
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
  // This is saying "look at the current directory, then look at client, then build, then load index.html"
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
