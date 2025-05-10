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
  dateTime: {
    type: Date,
    required: [true, 'Date and time are required'],
  },
}, { timestamps: true });

export default mongoose.model('Activity', activitySchema);