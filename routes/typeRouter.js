const Router = require('express');
const TypeController = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');

const router = new Router();

router.get('/', TypeController.getAll);
router.post('/', checkRole('ADMIN'), TypeController.create);

module.exports = router;
