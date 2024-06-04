import {Grid, styled } from '@mui/material'
import React from 'react';
import { imgURL } from '../../Constantes/Data';



const Wrapper= styled(Grid)
`
 margin-top:3px;
`

const MidSection = () => {
  return (
    <Grid container lg={12} sm={12} md={12} xs={12} >
        {
          imgURL.map(image =>(
            <Wrapper items lg={4} sm={12} md={4} xs={12}>
            <img src={image} alt='adimg'  style={{ width: '100%'}}/>
            </Wrapper>
          ))
        }
    </Grid>
  )
}

export default MidSection


 