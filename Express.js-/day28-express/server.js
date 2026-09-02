const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to ZealPharm API!');
});

app.get('/drugs', (req, res) => {
  res.json({message: 'List of available drugs coming soon'});
});

app.get('/about', (req, res) => {
  res.json({project: 'Pharmacy API', developer: 'ZealDaWiz'});
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

