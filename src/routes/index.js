const router = require('express').Router();


const mainControler = require('../controllers');

router.get('/', mainControler.indexPage);
// router.get('/registerForm', mainControler.registerFormPage);
// router.post('/singup', mainControler.singupUser);
// router.post('/logIn', mainControler.logIn);
// router.use(mainControler.error404);


module.exports = router;