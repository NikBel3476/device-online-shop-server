const Router = require('express');
const DeviceController = require('../controllers/deviceController');

const router = new Router();

router.get('/:id', DeviceController.getOne);
router.get('/', DeviceController.getAll);
router.post('/', DeviceController.create);

module.exports = router;
