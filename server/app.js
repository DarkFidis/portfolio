const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://darkharp:666fidis@ds263127.mlab.com:63127/portfolio_user', {}, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('DB online !')
  }
});

const routes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../home_app')));

app.use('/api', routes)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../home_app'));
})

app.listen(3000);
