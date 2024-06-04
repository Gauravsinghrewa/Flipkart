
import * as actiontype from  '../constants/productConstants';

import axios from 'axios';

const URL= "http://localhost:4000";

export const getProducts= ()=>async(dispatch)=>{
    try
    {
       const {data}=  await axios.get(`${URL}/products`)
       dispatch({type: actiontype.GET_PRODUCTS_SUCCESS,paylod:data})
    }
    catch(err)
    {
       dispatch({type: actiontype.GET_PRODUCTS_FAIL,paylod:err.message})
         
    }
}

export const getProductDetails = (id)=> async (dispatch)=>{
   try{
          dispatch({type: actiontype.GET_PRODUCT_DETAILS_REQUEST });
          const {data}=  await axios.get(`${URL}/product/${id}`)
          dispatch({type: actiontype.GET_PRODUCT_DETAILS_SUCCESS, paylod: data })
        
   }
   catch(err){
      dispatch({type: actiontype.GET_PRODUCT_DETAILS_FAIL, paylod: err.message})

   }
}


