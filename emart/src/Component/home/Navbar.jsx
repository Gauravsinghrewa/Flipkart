import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { navData } from '../../Constantes/Data'



const Compoitem=styled(Box)(({theme})=>({
  display:'flex',
  justifyContent: 'space-between',
  gap:'1rem',
  margin:'45px 40px 0 40px',
  [theme.breakpoints.down('lg')]:{
    // margin:0
    overflowX:'scroll'
  }
}))




const Container=styled(Box)
`
padding:10px 2px;  
text-align:center;
`;

const Text= styled(Typography)
`
   font-size:8px;
  font-weight:600;
  font-family:inherit;
`;
const Navbar = () => {
  return (
   <Compoitem> 
   {
      navData.map(data=>(
         <Container  > 
         <img src={data.url} alt='navbaritem' style={{width:54}} />
          <Text>{data.text} </Text>
         </Container>
      ))
   }
   </Compoitem>
  )
}



export default Navbar
