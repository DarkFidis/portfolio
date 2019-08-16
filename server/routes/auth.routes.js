const router = require('express').Router();
const { signup, signin, refreshToken } = require('../controllers/auth.controller')

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/refresh-token', refreshToken)

module.exports = router;
