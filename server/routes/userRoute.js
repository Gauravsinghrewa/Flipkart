// import express from 'express';
const express = require('express')

// import { userSignup } from '../controller/userController';
const {userSignup} =  require('../controller/userController')
const {getproduct, getproductById}=require("../controller/productcontroller")



const router = express.Router();


router.post("/",userSignup)
// router.post("/",)

router.get("/products",getproduct);
router.get('/product/:id',getproductById );

module.exports = router;