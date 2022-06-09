const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const handleCallback = require('./controllers/login')

app.use(express.json());

app.use(
  cors({ origin: true })
);

app.post('/callback', handleCallback);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
