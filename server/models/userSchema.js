// import mongoose from "mongoose";
const mongoose  = require('mongoose')

const userSchema= new mongoose.Schema({
    
    name:String,
    email:String,
    password:String,
    mobile:Number,
    
});

const user= new mongoose.model('user', userSchema);

module.exports = user