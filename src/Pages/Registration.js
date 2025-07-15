import React from 'react'
import './Styles/Registration.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Masterhead from '../Components/Masterhead'
import Globalfooter from '../Components/Globalfooter'
import Button from 'react-bootstrap/Button';

export default function Registration() {

  const navigate=useNavigate(); 
  const location = useLocation();
  const { email } = location.state || {};

  function handleNext(){
    navigate('/signup', { state: { email: email } });
  }

  return (
    <div>
        <a href='/signup/logout' className="signout-btn">
            <h5 className='signout'>Sign Out</h5>
        </a>
        <Masterhead/>
        <div className="register-body">
            <div className="inner-body">
                <img className='registerimg' src='/Assets/register-img.png'></img><br></br>
                <span>STEP <span className='bold'>1</span> OF <span className='bold'>3</span></span>
                <h2>Finish setting up your account.</h2>
                <h6>Netflix is personalized for you.<br></br> Create a password to watch on any device at any time.</h6><br></br>
                <Button onClick={handleNext} variant="danger" className='btn-4 register-next'>Next</Button>
            </div>
        </div>
        <Globalfooter/>
    </div>
  )
}
