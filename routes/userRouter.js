const Router = require('express');
const UserController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.get('/auth', authMiddleware, UserController.check);
router.post('/login', UserController.login);
router.post('/registration', UserController.registration);

module.exports = router;
