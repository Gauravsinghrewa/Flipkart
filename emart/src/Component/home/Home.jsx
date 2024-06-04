import {useEffect} from 'react'
//Component

  import Navbar from './Navbar'
  import Banner from './Banner'
  import Slide from './Slide';
  import MidSlide from './MidSlide';
  import MidSection from './MidSection';
import { Box, styled } from '@mui/material'
import { getProducts } from '../../redux/action/productAction'
import {useDispatch, useSelector} from 'react-redux';

  const Contain=styled(Box)
  `
    padding:10px;
    background:#F2F2F2;
  `

  
const Home = () => {
   const products =useSelector(state=>state.getProducts)

  const dispatch= useDispatch();

  useEffect(()=>{
     dispatch( getProducts())
  },[dispatch] )
  return (
    <>
       <Navbar/>
       <Contain>
         <Banner/>
         <MidSlide products={products} title="Deal of tha Day"  timer={true}/>
         <MidSection/>
         <Slide products={products} title="Discount for You" timer={false}/>
         <Slide products={products} title="Suggesting Items" timer={false}/>
         <Slide products={products} title="Top selection"     timer={false}/>
         <Slide products={products} title="Recommended Items" timer={false} />
         <Slide products={products} title="Trending Offers"    timer={false}/>
         <Slide products={products} title="Season's top picks" timer={false}/>
       </Contain>
    </>
  )
}

export default Home
