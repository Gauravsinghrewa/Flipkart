// import { Login } from '@mui/icons-material'
// import { Password } from '@mui/icons-material'
import { Box, Dialog, Typography ,TextField,Button, styled} from '@mui/material'
import React, { useState } from 'react'
import  {AtthenticateSignup} from '../../Service/Api';

const CompoBox=styled(Box)
`
  height:60vh;
  width:50vh;
  border-radius:15px
`
const LoginBox=styled(Box)
`
height:9vh;
width:50vh;
display:flex;
justify-content: center;
background:#2874f0;
${'' /* padding:5px; */}
`

const Wrapper = styled(Box)
`
display:flex;
flex-direction:column;
flex:1;
& > div, & >button , & > p{
  margin-top:10px;
}
`
const LgButton=styled("Button")
`
text-transform:none;
background:#FB641B;
margin:0 45px 0 45px ;
height:20px;
border-radius:3px;
border:none;

`
const Log =styled(Box)
`
width:100%;
height:25px;
background:#FB641B;
display:flex;
 justify-content: center;
 text-align:center;
 margin:5px;
`
const Logbtn= styled("Button")
`
 width:100%;
 height:25px;
 padding:1px;
 border:none
 
`


const Paragraph= styled(Typography)
`
font-size:0.5rem;
text-align:center;
`
const Input= styled(TextField)
`
 width:100%;
 padding:auto;
 font-size:0.7rem;
 font-weight:400; 
 & > label{
  font-size:0.7rem;
 }
`
// const Otpbtn=styled(Button)
// `
// text-transform:none;
// background:#FB641B;
// margin:0 45px 0 45px ;
// height:20px;
// border-radius:3px;
// border:none;
// `






// const singupinItialvalues={
//   name:'',
//   mobile :'',
//   email:'',
//   Password:'',
// }


const LoginPage = ({open,setOpen}) => { 
  
  const [islogin, setIsLogin]=useState(false)

 const [signup,setSignup]=useState({})


const handleclose=()=>{

  setOpen(false);
}



const onInputchange= (e)=>{
  setSignup({...signup,[e.target.name]: e.target.value});
     
}

const signsupUser=async()=>{
 let response= await AtthenticateSignup(signup)
 if(!response) return;
 handleclose();
}

  return (
    <Dialog open={open} onClose={handleclose} >                
       <CompoBox>
         <LoginBox >
         <Log >
         <Logbtn style={{color:"#FFE500", background:"#FFFF" }} onClick={() => setIsLogin(false)} >Signup</Logbtn>
         <Logbtn style={{color:islogin?"#FFE500":"red", background:"#FFFF" }}  onClick={()=>setIsLogin(true)} >Login</Logbtn>
         </Log>
         </LoginBox>
          {
            islogin?
          
         <Wrapper >
         <Input id="standard-basic" label="Enter E-mai/ Mobile Number" variant="standard" />
         <Input id="standard-basic" label="Enter Password" variant="standard" />
         <Paragraph>By continuing you agree to flipkart's Terms of Use and privacy policy.</Paragraph>
         <LgButton>Login</LgButton>
         {/* <Paragraph>or</Paragraph>
          <Otpbtn>Request OTP</Otpbtn> */}
         </Wrapper>
: 

         <Wrapper >
         <TextField onChange={(e)=>onInputchange(e)}  name='name'  label="Enter Name" variant="standard" /><br/>
         <TextField onChange={(e)=>onInputchange(e)}  name=' mobile' label="Enter Mobile number" variant="standard" /><br/>
         <TextField onChange={(e)=>onInputchange(e)}  name='email' label="Enter E-mail" variant="standard" /><br/>
         <TextField onChange={(e)=>onInputchange(e)}  name='Password' label="Enter Password" variant="standard" /><br/>
         <Button onClick={()=>signsupUser()}>Signup</Button>
         </Wrapper>
        }
       </CompoBox>
    </Dialog>
  )
}

export default LoginPage

