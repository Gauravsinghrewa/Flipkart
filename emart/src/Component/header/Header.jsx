import { AppBar, Toolbar,Box , styled, Typography, IconButton, Drawer, List, ListItem, Divider } from '@mui/material'
import React, { useState } from 'react'
import Search from './Search';
import Loginicon from './Loginicon';
import { Link } from 'react-router-dom';
import {Menu} from '@mui/icons-material';


const Styleheader= styled(AppBar)
   `background:#2874f0;
   height:45px;
   `;

   const Compobox= styled(Link)`
    
         margin-left:12%;
         line-height:0;
         text-decoration: none;
         color: inherit;
   `;

   const Subhedding= styled(Typography)
   `
    font-size:7px;
    font-style:italic;
    
   `;

   const Plushicon= styled("img")({
    width:10,
    height:10,
    marginLeft:4,
   });

  
   const CustomButtonWrapper=styled(Box)(({theme})=>({

      margin:'0 5% 0 auto',
           [theme.breakpoints.down('md')]:{
            display: 'none'
           }
   }));

   const MenuButton=styled(IconButton)(({theme})=>({
      display:'none',
      [theme.breakpoints.down('md')]:{
         display: 'block',
      }
   }))
   

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const[Open, setOpen]= useState(false);

  const hendleOpen=()=>{
     setOpen(!Open)
  }


 const drawer=(
   <Box onClick={ hendleOpen }  >
      <Typography>flipkart</Typography>
       <Divider/>
       <Loginicon/>
   </Box>
 )

  return (
    <div>
      <Styleheader>
         <Toolbar style={{minHeight:45}}>
           <MenuButton color='inherit' onClick={hendleOpen} edge="start" sx={{mb:"15", display:{ sm: "none" }}}>
            <Menu/>
           </MenuButton>

           <Box component="nav">
                <Drawer varient="temporary" open={Open} onClose={hendleOpen} 
                sx={{display:{xs:'block', sm:"none"}, '& .MuiDrawer-paper':{ boxSizing:"border-box", width:"240px",}}} >
                    {drawer}
                </Drawer>
           </Box>
   

             <Compobox to='/' >
                <img src={logoURL} alt='logo'  style={{width:65, height:13, }}/>
                <Box style={{display:"flex"}}>
                   <Subhedding>Explore&nbsp;
                   <Box component="span" style={{color:"#FFE500"}}  >Plush</Box> 
                   </Subhedding>
                   <Plushicon src= {subURL} alt='plus' />
                </Box>
             </Compobox>
             <Search/>
             <CustomButtonWrapper>
             <Loginicon/>
             </CustomButtonWrapper>
         </Toolbar>
      </Styleheader>
    </div>
  )
}

export default Header
