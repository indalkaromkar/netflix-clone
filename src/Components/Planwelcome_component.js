import React from 'react'
import './Styles/Planwelcome_component.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Planwelcome_component({email}) {
  
  const navigate = useNavigate();

  function handleNext() {
    navigate(`/signup/planform`, {state:{email:email}});
  }

  return (
    <div className='inner-container2'>
        <a href='/signup/logout' className="signout-btn">
            <h5 className='signout'>Sign Out</h5>
        </a>
        <div className="tick"><i class="bi bi-check-circle"></i></div><br></br>
      <span>STEP <span className='bold'>2</span> OF <span className='bold'>3</span></span>
      <h2>Choose your plan.</h2>
      <div className="feature-container">
        <span className='feature-tick'><i class="bi bi-check-lg"></i></span><span className='features'> No commitments, cancel anytime.</span><br></br>
        <span className='feature-tick'><i class="bi bi-check-lg"></i></span>
          <div className="feature-text">
            <span className='features'> Everything on Netflix for one low price.</span><br></br>
          </div> 
        <span className='feature-tick'><i class="bi bi-check-lg"></i></span><span className='features'> No ads and no extra fees. Ever.</span>
      </div>
      <Button onClick={handleNext} variant="danger" className='btn-4'>Next</Button>
    </div>
  )
}
