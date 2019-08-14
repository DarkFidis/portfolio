const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const RSA_KEY_PRIVATE = fs.readFileSync('./rsa/key')

exports.signup = (req, res, next) => {
  const newUser = new User({
    email: req.body.email,
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8))
  })

  newUser.save((err) => {
    if(err) {
      res.status(500).json('Erreur lors de l\'inscription');
    }
    res.status(200).json('Inscription réussie');
  })
};

exports.signin = (req, res, next) => {
  User.findOne({ 'email': req.body.email }).exec((err, user) => {
    if(user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({}, RSA_KEY_PRIVATE, {
        algorithm: 'RS256',
        subject: user._id.toString()
      });
      res.status(200).json(token);
    } else {
      res.status(401).json('Erreur de connexion');
    }
  })
}
