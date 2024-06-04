
// import mongoose from "mongoose";
const mongoose  = require('mongoose')


 const Connection= async()=>{
     const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.gunujao.mongodb.net/ecommerce`;




    try{
          await mongoose.connect(URL)
          console.log("database connection is successfully");
    }

    catch(err){
        console.log("error while with the connection of database", err.message);
    }
}



module.exports = Connection;