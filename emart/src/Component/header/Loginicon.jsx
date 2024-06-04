import { Box,Button, Typography ,styled} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material';
import {Storefront}from '@mui/icons-material';
import React, { useState } from 'react'

//components
import LoginPage from '../login/LoginPage';


const Wrapper= styled(Box)
`
 display:flex;
 justify-content:center;
  gap:1.8rem;
  align-item:center;
 margin:0 5% 0 auto;
 & > button{
  font-size:12px  ;
  align-item:center;
 }
`;
const Cardbutton= styled(Box)`
display:flex;
 & > p, & > svg{
  font-size:10px;
align-item:center;
margin:2px ;
 }
`;

const Storebutton=styled(Box)`
display:flex;
text-align:center;
 & > p, & > svg{
  font-size:10px;
text-align:center;
margin:2px ;

 }
`

const Loginbutton= styled(Button)
`
color:#2874f0;
background:#fff;
text-transform:none;
padding:2px,30px;
border-radius:2px;
Box-shadow:none;
font-weight:600;
height:22px;
`
const Loginicon = () => {

  const [open, setOpen]= useState(false);

  const openlogin= ()=>{
    setOpen(true);
  }
  return (
    <Wrapper>
        <Loginbutton variant='contained' onClick={() => openlogin()} >Login</Loginbutton>
        <Cardbutton>
             <ShoppingCart  style={{ marginTop:5 }}/>
            <Typography style={{ marginTop:3 }}>Card</Typography>
        </Cardbutton>

        <Storebutton>
            <Storefront  style={{ marginTop:5 }}/>
        <Typography style={{ width:75, marginTop:3, }}>Become a seller</Typography>
        </Storebutton>

        <LoginPage open={ open } setOpen={setOpen}/>
    </Wrapper>
  )
}

export default Loginicon;
