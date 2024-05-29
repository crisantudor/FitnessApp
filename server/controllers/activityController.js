const Activity = require('../models/activityModel');

exports.getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.getAll();
    res.json(activities);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getActivityById = async (req, res) => {
  const { id } = req.params;
  try {
    const activity = await Activity.getById(id);
    if (!activity) {
      return res.status(404).send('Activity not found');
    }
    res.json(activity);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getActivitiesByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const activities = await Activity.getByUserId(userId);
    if (!activities) {
      return res.status(404).send('Activities not found');
    }
    res.json(activities);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.createActivity = async (req, res) => {
  const { userId, activityType, duration, caloriesBurned, activityDate } = req.body;
  try {
    const result = await Activity.create({ userId, activityType, duration, caloriesBurned, activityDate });
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.updateActivity = async (req, res) => {
  const { id } = req.params;
  const { activityType, duration, caloriesBurned, activityDate } = req.body;
  try {
    const result = await Activity.update(id, { activityType, duration, caloriesBurned, activityDate });
    if (result.affectedRows === 0) {
      return res.status(404).send('Activity not found');
    }
    res.json({ id, activityType, duration, caloriesBurned, activityDate });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.deleteActivity = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Activity.delete(id);
    if (result.affectedRows === 0) {
      return res.status(404).send('Activity not found');
    }
    res.send('Activity deleted');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
