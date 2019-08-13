import { User } from '../models/user.model';
const bcrypt = require('bcrypt');

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
