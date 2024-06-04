import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/action/productAction';
import {Box, Grid, styled} from '@mui/material'
import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';


const Component = styled(Box)
`
background:#F2F2F2;
`
const Container=styled(Grid)(({theme})=>({
  background:'#FFFFFF',
  display:'flex',
  [theme.breakpoints.down('md')]:{
    margin: 0,
  }

}))

const RightContainer = styled(Grid)
`
margin-top:40px;
`

const DetailsView = () => {

  const dispatch = useDispatch();
  const{id}=useParams();

 const {product}= useSelector(state=>state.getProductDetails)



  useEffect(()=>{
    if(product && id !== product.id)
        dispatch(getProductDetails(id))
  },[dispatch])
  return (
    <>
    <Component>
         {
          product && 
          
           <Container container>
               <Grid item  lg={4} md={4} sm={8} xs={12}>
                <ActionItem product={product} />
               </Grid>

               <RightContainer item lg={8} md={8} sm={8} xs={12} sx={{pl:2}}>
                 
                 <ProductDetail product={product}/>
               </RightContainer>
           </Container>
         }
    </Component>

    </>
  )
}

export default DetailsView
