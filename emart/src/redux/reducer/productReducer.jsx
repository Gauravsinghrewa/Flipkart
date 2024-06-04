
import * as actiontype from '../constants/productConstants';


export const getProductsReducer=(state={products:[]},action)=>{
     switch(action.type)
     {
        case actiontype.GET_PRODUCTS_SUCCESS:
            console.log(action)
           return {products:action.paylod}
        case actiontype.GET_PRODUCTS_FAIL:
            return {error:action.paylod}
        default:
            return state
     }
}

export const getProductDetailsReducer=(state = {product:{} },action)=>{

     switch (action.type){
        case actiontype.GET_PRODUCT_DETAILS_REQUEST:
            return {loading: true}
        case actiontype.GET_PRODUCT_DETAILS_SUCCESS:
            return {loading: false,  product:action.paylod}   
        case actiontype.GET_PRODUCT_DETAILS_FAIL:
                return {loading: false,  err:action.paylod}     
        case actiontype.GET_PRODUCT_DETAILS_RESET:       
           return {product: {}}
           
          default :
          return state 
     }
}