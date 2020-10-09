require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.json({ msg: 'base url' });
});

app.get('/test', (req, res) => {
  return res.json({ msg: 'test url' });
});

const PORT = process.env.PORT || 23456;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
