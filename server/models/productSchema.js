// import mongoose from "mongoose";
const mongoose  = require('mongoose')


const productschema= new mongoose.Schema({
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String,
});

const product= new mongoose.model('product', productschema);

module.exports = product