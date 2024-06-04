     // import express from 'express';
const express = require('express')
// import Connection from './database/db.js';
// import dotenv from 'dotenv';
// import userRoute from './routes/userRoute.js'
const Connection = require('./database/db.js')
const dotenv = require('dotenv')
const userRoute = require('./routes/userRoute.js')
const cors =require('cors')
const PORT=4000;

const app= express();
app.use(express.json())
app.use(cors())
dotenv.config();


app.use(userRoute)
app.listen(PORT,()=> {
    Connection();
    console.log(`server is running successfully on PORT ${PORT}`)
});


