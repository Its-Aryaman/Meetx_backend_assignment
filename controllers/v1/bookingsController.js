import Activity from '../../models/Activity.model.js';
import Booking from '../../models/Booking.model.js';

export const bookActivity = async (req, res) => {
  const { activityId } = req.body;

  try {
    // Check if activity exists
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    // Create new booking
    const booking = new Booking({
      user: req.user.id,
      activity: activityId,
    });

    // Save booking
    await booking.save();

    res.status(201).json({ message: 'Activity booked successfully', booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate('activity', 'title description location dateTime')
      .select('activity bookedAt');

    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};