import { Box, styled } from '@mui/material'
import React from 'react'
import Slide from './Slide'


const Component= styled(Box)
`
display:flex;
`

const LefComponent=styled(Box)(({theme})=>({
  width:'83%',
  [theme.breakpoints.down('md')]:{
    width:'100%'
  }
}));



const RightComponent= styled(Box)(({theme})=>({

  background:'#FFFFF',
padding:3,
marginLeft:5,
marginTop:2,
width:'17%',
textalign:'center',
[theme.breakpoints.down('md')]:{
  display:'none'
}
}))



const MidSlide = ({products,title,timer}) => {
    const adURL= "https://rukminim2.flixcart.com/fk-p-flap/470/720/image/207d5c8eeb12fba0.png?q=20";
  return (
    <Component>
        <LefComponent>
         <Slide
          products={products} 
          title={title} 
           timer={timer}/>
        </LefComponent>

         <RightComponent>
        <img src={adURL} loading="eager" alt="ad" style={{ width:160, height:240 }} />
        </RightComponent>
    </Component>
  )
}

export default MidSlide
