import React from 'react'
import Masterhead from '../Components/Masterhead'
import Globalfooter from '../Components/Globalfooter'
import { useLocation } from 'react-router-dom';
import Planwelcome_component from '../Components/Planwelcome_component';

export default function Planwelcome() {

  const location = useLocation();
  const {email} = location.state || {};

  return (
    <div>
        <Masterhead/>
        <div className="body-container">
            <Planwelcome_component email={email}/>
        </div>
        <Globalfooter/>
    </div>
  )
}
