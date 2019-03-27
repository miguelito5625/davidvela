const router = require('express').Router();


const userController = require('../controllers/userControllers');

router.get('/', userController.indexPage);
router.use(userController.error404);


module.exports = router;