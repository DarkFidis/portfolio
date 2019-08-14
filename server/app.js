const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const multer = require('multer');
const mongoose = require('mongoose');

mongoose.connect('mongodb://darkharp:666fidis@ds263127.mlab.com:63127/portfolio_user', {}, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('DB online !')
  }
});

const routes = require('./routes');

app.use('/api', routes)

app.listen(3000);
