import express from "express";
import env from "dotenv"
import connectDb from "./db/index.js";
// const express = require("express");
// const env = require("dotenv").config();

env.config();

const app = express();


const port = process.env.Port;

connectDb();


app.get('/', (req,res)=> {
    res.send("Hello");
})


app.listen(port,()=>{
    console.log(`Listening to ${port}`);
})