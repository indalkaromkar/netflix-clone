import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Styles/Signin.css'
import Masterhead from '../Components/Masterhead';
import Globalfooter from '../Components/Globalfooter';
import Signin_component from '../Components/Signin_component';

export default function Signin() {
  
  const location = useLocation();
  const {email} = location.state || {}; 

  return (
    <div>
        <Masterhead/>
        <div className="body-container">  
          <Signin_component email={email}/>
        </div>
        <Globalfooter/>
    </div>
  )
}
