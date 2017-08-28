// Env Variables
require('dotenv').config();

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

// Init App and Port
const app = express();
const port = process.env.PORT || 8200;

// Files
const FlashCards = require('./routes/flashcards');


// Database
mongoose.connect("mongodb://root:toor@ds159963.mlab.com:59963/flashcards");
mongoose.connection.on('connected', () => {
  console.log('connected');
});
// Middleware
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/cards', FlashCards);

// Routes
app.get('/', (req, res) => {
  res.send('Default Endpoint');
});

// Start
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('App running on port:' + port);
  }
});


