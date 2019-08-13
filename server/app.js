const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const multer = require('multer');

const routes = require('./routes');

app.use('/api', routes)

app.listen(3000);
