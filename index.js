import express from "express";
import env from "dotenv"
import connectDb from "./db/index.js";

env.config();

const app = express();


app.use(express.json());

const port = process.env.Port  || 3000;


connectDb();

// Versioned Routes (v1)
import authRoutes from './routes/v1/auth.js';
import activitiesRoutes from './routes/v1/activities.js';
import bookingsRoutes from './routes/v1/bookings.js';

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/activities', activitiesRoutes);
app.use('/api/v1/bookings', bookingsRoutes);

app.listen(port,()=>{
    console.log(`Listening to ${port}`);
})