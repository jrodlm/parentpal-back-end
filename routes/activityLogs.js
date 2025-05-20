const express =require('express');
const router = express.Router();
const activityController = require('../controllers/activityLogController');

router.post('/',activityController.createActivity);
router.get('/', activityController.getAllactivities);
router.get('/:id', activityController.getActivityById);
router.put('/:id', activityController.updateActivity);
router.delete('/:id', activityController.deleteActivity);


module.exports = router;