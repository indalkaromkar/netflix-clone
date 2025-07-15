import React from 'react'
import './Styles/Masterhead.css'

export default function Masterhead() {
  return (
    <div className='ms-head'>
        <img className='brand-logo2' src='/Assets/Netflix-brand.png'></img>
        <a href='/login' className="signin-btn">
          <h5 className='signin'>Sign In</h5>
        </a>       
    </div>
  )
}
