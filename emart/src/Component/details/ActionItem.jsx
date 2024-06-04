import { Box, Button, styled } from '@mui/material'
import React from 'react'
import {ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material';


const LeftContainer= styled(Box)(({theme})=>({
  minWidth:'30%',
  padding:'45px 0 0 20px',
    [theme.breakpoints.down('md')]:{
    }

}));

const Image= styled('img')({
 
  width:'90%',
  padding:'15px',
})

const StyleBtn= styled(Button) (({theme})=>({

  width:'43%',
  height:'30px',
  fontSize:'10px',
  marginTop:'10px',
  borderradius:'2px',
  [theme.breakpoints.down('ig')]: {
    width:'43%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '45%'
  }
}));


const ActionItem = ({product}) => {
  console.log(product)
  return (
    <LeftContainer>
    <Box style={{  padding: '15px,15px', border: '1px solid #f0f0f0'}}>
    <Image src={product.detailUrl} alt='product'/>
    </Box>
      <StyleBtn variant="contained" style={{marginRight:10, marginLeft:15, background: '#ff9f00' }}><Cart/>Add to Cart</StyleBtn>
      <StyleBtn variant="contained" style={{  background: '#fb541b'}}><Flash/> Buy Now</StyleBtn>
    </LeftContainer>
  )
}

export default ActionItem
