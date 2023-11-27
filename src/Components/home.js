import { useState } from 'react';
import Login from './login'
import UserEntry from './UserInsert'
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode } from 'jwt-decode'

function Home() {
  const[token,setToken] = useState("");
  const[decode,setdecode] = useState("");

console.log(token?token:"");
console.log(decode?decode:"");
  return (
    <div>   
         <GoogleLogin
            onSuccess={credentialResponse => {
              // console.log(credentialResponse);
              setToken(credentialResponse);
              setdecode(jwtDecode(credentialResponse.credential));
              
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
     <Login />
     <UserEntry />
    </div>
  )
}


export default Home
