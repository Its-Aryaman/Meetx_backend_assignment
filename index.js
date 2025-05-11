import express from "express";
import env from "dotenv"
import connectDb from "./db/index.js";
// const express = require("express");
// const env = require("dotenv").config();

env.config();

const app = express();


app.use(express.json());

const port = process.env.Port  || 3000;


connectDb();
// // app.get('/', (req,res)=> {
// //     res.send("Hello");
// // })

// // import userRouter from './routes/user.routes.js'
// import auth from './routes/v1/auth.js'
// // import { loginUser } from "./controllers/user.controller.js";


// // app.use("/api/v1/users", userRouter)


// app.use('/api/v1/auth', auth);
// app.use('/api/v1/activities', require('./routes/v1/activities'));
// app.use('/api/v1/bookings', require('./routes/v1/bookings'));


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