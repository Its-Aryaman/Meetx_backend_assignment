import Activity from '../../models/Activity.model.js';

export const listActivities = async (req, res) => {
  try {
    const { type, date} = req.query;

    let findCondition ={isBooked: false};


    if(type)
        findCondition= {...findCondition,type};

    if(date)
        findCondition= {...findCondition,date};



    const activities = await Activity.find(findCondition).select('title description location dateTime type');

    res.json(activities);


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createActivity = async (req, res) => {
  const { title, description, location, date, time, type } = req.body;

  try {
    const activity = new Activity({
      title,
      description,
      location,
      date,
      time,
      type: type
    });

    await activity.save();
    res.status(201).json({ message: 'Activity created successfully', activity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};