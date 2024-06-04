import { Box, InputBase, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'


const InputBox= styled(Box)
`
background:#fff;
width:38%;
height:49%;
border-radius:2px;
margin-left:10px;
display:flex;
`;

const Inputsearchbase=styled(InputBase)
`
padding-left:4px;
width:100%;
font-size:10px;
`

const Searchiconrapper= styled(Box)
`
color:blue;
${'' /* padding:0px; */}
`
const Search = () => {
  return (

    <InputBox>
   <Inputsearchbase
   placeholder="Search for Products,brands and more"
   />
   <Searchiconrapper>
    <SearchIcon/>
   </Searchiconrapper>

    </InputBox>
  )
}

export default Search
