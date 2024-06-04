
const { req, res } = require("express");
const product= require("../models/productSchema");


 const getproduct=async(req,res)=>{
  try
  {
     const products= await product.find()
     res.status(200).json(products);

  }
  catch(err)
  {
    res.status(500).json({message: err.message})

  }
}

const getproductById=async(req,res)=>{
  try
  {
     const id= req.params.id;
     const productData=await product.findOne({'id':id})

     res.status(200).json(productData

     );
  }
  catch(err){
    res.status(500).json({ message: err.message }

    )
  }
}
module.exports={getproduct,getproductById};