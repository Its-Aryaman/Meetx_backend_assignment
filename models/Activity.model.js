import mongoose from 'mongoose';


const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true,
  },
  date: {
    type: String,
    required: [true, 'Date is required'],
    match: [/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'],
  },
  time: {
    type: String,
    required: [true, 'Time is required'],
    match: [/^\d{2}:\d{2}:\d{2}$/, 'Time must be in HH:mm:ss format'],
  },
  type: {
    type: String,
    enum: ['cricket', 'football', 'movie', 'other'],
    default: 'other',
    required: true,
  },
  isBooked: {
    type: Boolean,
    default: false,
  }

}, { timestamps: true, versionKey: false });

export default mongoose.model('Activity', activitySchema);