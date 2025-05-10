import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
        name: {
          type: String,
          required: [true, 'Name is required'],
          trim: true,
        },
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
          trim: true,
          lowercase: true,
          match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
        },
        phone: {
          type: String,
          required: [true, 'Phone number is required'],
          trim: true,
          match: [/^\+?\d{10,15}$/, 'Please use a valid phone number'],
        },
        password: {
          type: String,
          required: [true, 'Password is required'],
          minlength: [6, 'Password must be at least 6 characters'],
        },
      }, { timestamps: true });
      
      export default mongoose.model('User', userSchema);