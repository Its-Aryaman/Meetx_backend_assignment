import mongoose from 'mongoose';


const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required'],
  },
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Activity',
    required: [true, 'Activity is required'],
  },
  bookedAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true, versionKey: false });

export default mongoose.model('Booking', bookingSchema);