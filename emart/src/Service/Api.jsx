import axios from 'axios';

const URL= 'http://localhost:4000'
export const AtthenticateSignup= async(data)=>{
    try
    {
      return await axios.post(`${URL}/signup`,data);
    }
    catch(err)
    {
         console.log('error while calling signup api', err);
    }
}