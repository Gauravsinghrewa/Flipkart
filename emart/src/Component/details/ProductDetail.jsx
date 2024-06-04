import React from 'react'
import { Typography,Box, styled, Table, TableBody, TableCell, TableRow } from '@mui/material'
import {LocalOffer as Badge} from '@mui/icons-material';


const TextStyle= styled(Box)
`
font-Size:10px;
marginLeft:10px;
vertical-align:baseline;
  & > p{
    font-Size:10px;
    margin-top:5px;
  }
`

const StyleBadge= styled(Badge)
`
margin-right:10px;
color:#00CC00;
font-size:10px;
`
const ColumnText= styled(TableRow)`

font-Size:14px;
vertical-align:baseline;
& > td {
      font-Size:10px;
      margin-top:10px;
      border:none;
}
`

const ProductDetail = ({product}) => {
  const date =new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000))
//   const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  return (
    <>
                <Typography> {product?.title?.longTitle} </Typography>
                 <Typography style={{ marginTop:5, color:'#878787', fontSize:14 }}>
                 8000Rating & 1200 Reviews 
                 </Typography>
                 <Typography>
                  <Box component='span' sx={{ fontSize:28 }}>₹{product?.price?.cost}</Box>&nbsp;&nbsp;&nbsp;
                  <Box component='span' sx={{color:'#878787'}}><strike>{product?.price?.mrp}</strike></Box>&nbsp;&nbsp;
                  <Box component='span' sx={{color:'#388E3C' }} >{product?.price?.discount}</Box>
                 </Typography>
                 <Typography>Available Offers</Typography>
                 <TextStyle>
                    <Typography><StyleBadge/>Bank OfferGet ₹25 instant discount on first Flipkart UPI txns on order of ₹250 and aboveT&C</Typography>
                    <Typography><StyleBadge/>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</Typography>
                    <Typography><StyleBadge/>Bank Offer10% off on HSBC Bank Credit Card Transactions, up to ₹1,250 on orders of ₹15,000 and aboveT&C</Typography>
                    <Typography><StyleBadge/>Special PriceGet extra 42% off (price inclusive of cashback/coupon)T&C</Typography>
                    <Typography><StyleBadge/>Bank Offer10% off on HSBC Bank Credit Card EMI Transactions, up to ₹1,750 on orders of ₹15,000 and aboveT&C</Typography>
                    <Typography><StyleBadge/>Bank Offer10% off up to ₹1,250 on Yes Bank Credit Card Transactions on orders of ₹10,000 and aboveT&C</Typography>
                    <Typography><StyleBadge/>Buy for 2000 get ₹500 off your Next BuyT&C</Typography>
                 </TextStyle>
                 <Table>
                    <TableBody>
                         <ColumnText>
                               <TableCell style={{ color:'#878787' }}>Delivery</TableCell>
                               <TableCell style={{ fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40</TableCell>                                
                         </ColumnText>
                         <ColumnText>
                               <TableCell style={{ color:'#878787' }}>Warranty</TableCell>
                               <TableCell>No Warranty</TableCell>                                
                         </ColumnText>
                         <ColumnText>
                               <TableCell style={{ color:'#878787' }}>Seller</TableCell>
                               <TableCell style={{ color:'#2874f0'}}>
                                <Box component='span' style={{ color:'#2874f0'}}>SuperComnet</Box>
                                <Typography>GST invoice available</Typography>
                                <Typography style={{ fontSize:'10px' }}>view more Seller starting from ₹{product?.price?.cost}</Typography>
                               </TableCell>                                
                         </ColumnText>
                         {/* <ColumnText>
                               <TableCell colSpan={2}>
                               <img src={adURL} style={{ width:390 }}  alt='flipkart points'/>
                               </TableCell>
                         </ColumnText> */}
                         <ColumnText>
                               <TableCell style={{ color:'#878787' }}>Description</TableCell>
                               <TableCell>{product.description}</TableCell>                             
                         </ColumnText>
                    </TableBody>
                 </Table>
    </>
  )
}

export default ProductDetail
