const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const RSA_KEY_PRIVATE = fs.readFileSync('./rsa/key');
const RSA_PUBLIC_KEY = fs.readFileSync('./rsa/key.pub');

exports.signup = (req, res, next) => {
  console.log('Signup-ing')
  const newUser = new User({
    email: req.body.email,
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8)),
    role: 'user'
  })

  newUser.save((err) => {
    if(err) {
      res.status(500).json('Erreur lors de l\'inscription');
    }
    res.status(200).json('Inscription réussie');
  })
};

exports.signin = (req, res, next) => {
  User.findOne({ 'name': req.body.name }).exec((err, user) => {
    if(user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({}, RSA_KEY_PRIVATE, {
        algorithm: 'RS256',
        expiresIn: '300s',
        subject: user._id.toString()
      });
      res.status(200).json(token);
    } else {
      res.status(401).json('Erreur de connexion');
    }
  })
}

exports.isLoggedIn = (req, res, next) => {
  const token = req.headers.authorization;
  if(token) {
    jwt.verify(token, RSA_PUBLIC_KEY, (err, decoded) => {
      if(err) {
        return res.status(401).json('Token invalide');
      }
      const sub = decoded.sub;
      User.findOne({ '_id': sub}).exec( (err, user) => {
        if(err || !user) {
          res.status(401).json('Erreur')
        }
        req.user = user;
        next();
      })
    })
  }
}

exports.refreshToken = (req, res, next) => {
  const token = req.headers.authorization;
  if(token) {
    jwt.verify(token, RSA_PUBLIC_KEY, (err, decoded) => {
      if(err) {
        return res.status(403).json('Token invalide');
      }
      const newToken = jwt.sign({}, RSA_KEY_PRIVATE, {
        algorithm: 'RS256',
        expiresIn: '300s',
        subject: decoded.sub
      });
      res.status(200).json(newToken);
    })
  } else {
    res.status(403).json('Pas de token')
  }
}
