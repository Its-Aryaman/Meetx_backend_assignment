import Activity from '../../models/Activity.model.js';

export const listActivities = async (req, res) => {
  try {
    const { type } = req.query;
    const query = type ? { type } : {};
    const activities = await Activity.find(query).select('title description location dateTime type');
    res.json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createActivity = async (req, res) => {
  const { title, description, location, dateTime, type } = req.body;

  try {
    const activity = new Activity({
      title,
      description,
      location,
      dateTime,
      type: type || 'other',
    });

    await activity.save();
    res.status(201).json({ message: 'Activity created successfully', activity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};