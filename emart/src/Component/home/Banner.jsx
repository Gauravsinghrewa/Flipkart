import React from 'react'
import Carousel from 'react-multi-carousel';
import { bannerData } from '../../Constantes/Data';
import { styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';

const Image= styled('img')(({theme})=>({
  width:'100%',
  height:180,
  [theme.breakpoints.down('md')]:{
    ObjectFit:'cover',
    height:80,
    width:'100%',

  }
}))

const responsive = {
 
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () => {
  return (  
    <Carousel responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={4000}
    keyBoardControl={true}
    slidesToSlide={1}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    containerClass="carousel-container"
    >
       {
        bannerData.map(data =>(
         < Image src={data.url} alt='banner'/>
        ))
       }
    </Carousel>
  )
}

export default Banner
