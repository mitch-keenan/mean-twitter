// Dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Setup mongoose
if(process.argv.length < 3) {
  console.error('Please supply a mongo db uri as an argument');
  process.abort();
}
mongoose.connect(process.argv[2]);

// Import api routes
const api = require('./server/routes/api');

const app = express();

// post data parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup Routes
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api/v1/', api);

// Fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Setup the server
const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`API listening on port ${port}`));