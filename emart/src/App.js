import './App.css';
import Header from './Component/header/Header';
import Home from './Component/home/Home';
import { Box } from '@mui/material';
import DetailsView from './Component/details/DetailsView';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div >
    <BrowserRouter>
    <Header/> 
       <Box style={{marginTop:45, }} >
       <Routes>
        <Route path='/' element= {<Home/>}/>
         <Route path='Product/:id'element= {<DetailsView/>}/>
       </Routes>
       </Box>
    </BrowserRouter>
       
    </div>
  );
}

export default App;
