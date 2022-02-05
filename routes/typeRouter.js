const Router = require('express');
const TypeController = require('../controllers/typeController');

const router = new Router();

router.get('/', TypeController.getAll);
router.post('/', TypeController.create);

module.exports = router;
