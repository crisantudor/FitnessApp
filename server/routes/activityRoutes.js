const express = require('express');
const activityController = require('../controllers/activityController');
const router = express.Router();

router.get('/', activityController.getAllActivities);
router.get('/:id', activityController.getActivityById);
router.get('/user/:userId', activityController.getActivitiesByUserId);
router.post('/', activityController.createActivity);
router.put('/:id', activityController.updateActivity);
router.delete('/:id', activityController.deleteActivity);

module.exports = router;
