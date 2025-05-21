const express = require('express');
const router = express.Router();
const childCtrl = require('../controllers/childController');
const authMiddleware = require('../middleware/authMiddleware');


// ALL CRUD ROUTES FOR CHILDREN
router.post('/', authMiddleware, childCtrl.createChild);
router.get('/', authMiddleware, childCtrl.getChildren);
router.get('/:id', authMiddleware, childCtrl.getChildById);
router.put('/:id', authMiddleware, childCtrl.updateChild);
router.delete('/:id', authMiddleware, childCtrl.deleteChild);

module.exports = router;
