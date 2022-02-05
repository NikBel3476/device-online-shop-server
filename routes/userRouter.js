const Router = require('express');
const UserController = require('../controllers/userController');

const router = new Router();

router.get('/auth', UserController.check);
router.post('/login', UserController.login);
router.post('/registration', UserController.registration);

module.exports = router;
