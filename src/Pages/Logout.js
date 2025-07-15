import React from 'react'
import './Styles/Logout.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function Logout() {

    const navigate = useNavigate();

    function logout() {
      navigate(`/`);
    }

    useEffect(() => {
        const timer = setTimeout(logout, 15000); 
        return () => clearTimeout(timer); 
    }, []);

  return (
    <div>
        <div className="home-main-container logout-container">
          <div className="hero-masterhead">
            <img className='brand-logo' src='/Assets/Netflix-brand.png'></img>
            <Button href='/login' className='text-light fw-bold btn-2' variant="danger">Sign In</Button>
          </div>
          <div className="inner-box-error">
            <div className="text-box-error">
                <h3 className='logout-text-head'>Leaving So Soon?</h3><br></br>
                <p className='logout-text'>Just so you know, you don't always need to sign out of Netflix. It's only necessary if you're on a shared or public computer. </p>
                <p className='logout-text'>You'll be redirected to Netflix.com in 30 seconds.</p><br></br>
                <Button onClick={logout} variant="primary" className='gonow-btn'>Go Now</Button>
            </div>
          </div> 
          <div className="home-footer2 footer-logout">
            <h6>© 2024 NetflixClone. All rights reserved.&nbsp;By Group 20 - COSC 31093</h6> 
            <h7>This is a demo project and is not affiliated with or endorsed by Netflix. All content, logos, and trademarks are property of their respective owners.</h7>
          </div>
        </div>
    </div>
  )
}
