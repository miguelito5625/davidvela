const router = require('express').Router();

const auth = require('../controllers/authentication');

router.get('/sigin', auth.signin);
router.get('/signup', auth.signup);

router.post('/signup', auth.signupPost);

module.exports = router;
