import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Divider,styled } from '@mui/material';



const responsive = {
 
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

const Component= styled(Box)
`
margin-top:5px;
background:#FFFF;
alignItems:center;
`;

const Deals= styled(Box)
`
padding:1px 5px;
display:flex;
`

const DealText= styled(Typography)
`
font-size:14px;
font-weight:500;
margin-right:25px;
line-height:32px;
`
const ViewAllBtn= styled(Button)
`
margin-left:auto;
font-Size:8px;.
background-color:#2874f0;
border-radis:2px;
width:auto;
height:25px; 
text-align:center;
margin-top:auto;
margin-bottom:auto;
`;


const Image= styled('img')({
  width:'auto',
 height:100
})

const Text= styled(Typography)
`
font-Size:10px;
margin-top:2px;
`

const Slide = ({products,title,timer}) => {
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  const renderer= ({ hours, minutes, seconds })=>{

    return <Box variant='span'>{hours}:{minutes}: {seconds} Left</Box> 

  };
  return (
    <Component>
    <Deals sx={{ background: "#FFFFFF " }}>
      <DealText>{title}</DealText>

      {
        timer &&
               <Box display="flex" alignItems="center"  ml={1} color='#7f7f7f' fontSize={10} >
        <img src={timerURL} alt='timer' style={{ width:20 }} />
        <Countdown date={Date.now() + 5.04e+7}  renderer={renderer}/>
      </Box>
      }

      
      <ViewAllBtn variant="contained">View All</ViewAllBtn>
    </Deals>  
    <Divider/>
    {
      products.products &&   <Carousel 
    responsive={responsive}
    infinite={true}
    swipeable={false}
    draggable={false}
    autoPlay={true}
    autoPlaySpeed={4000}
    keyBoardControl={true}
    centerMode={true}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-20-px"
    containerClass="carousel-container"
    
    >
       {
        products.products &&products.products?.map((items )=>(
        <Link to={`Product/${items.id}`} style={{ textDecoration : 'none' }}> 

          <Box textAlign='center' sx={{ padding :'25px 1px'}}> 
            <Image src={items.url} alt='product'/>
            <Text  sx={{ fontWeight:600 ,color:'#212121' }}>{items.title.shortTitle}</Text>
            <Text sx={{color:'green'}}>{items.discount}</Text>
            <Text sx={{ color:'#212121'}}>{items.tagline}</Text>
          </Box>
        </Link>  
        ))
       }
    </Carousel>
    }
    
    </Component>
  )
}

export default Slide
