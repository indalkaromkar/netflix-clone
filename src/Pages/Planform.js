import React, { useState } from 'react';
import './Styles/Planform.css'
import Masterhead from '../Components/Masterhead'
import Globalfooter from '../Components/Globalfooter'
import PlanCard from '../Components/PlanCard'
import Button from 'react-bootstrap/Button';
import PlanCard2 from '../Components/PlanCard2'
import { useNavigate, useLocation } from 'react-router-dom';


export default function Planform() {
  
  const navigate = useNavigate();
  const location = useLocation();
  const {email} = location.state || {};
  const [selectedCard, setSelectedCard] = useState('Premium');

  const handleSelect = (title1) => {
    setSelectedCard(title1);
  };

  const packageSelected = () => {
    let packagePrice;
    if(selectedCard=='Premium')
      packagePrice=9.99;
    else if(selectedCard=='Standerd')
      packagePrice=7.99;
    else if(selectedCard=='Basic')
      packagePrice=3.99;
    else if(selectedCard=='Mobile')
      packagePrice=2.99;
    navigate('/signup/paymentPicker', { state: {selectedCard,packagePrice,email} });
  };

  return (
    <div className='planform-container'>
        <a href='/signup/logout' className="signout-btn">
            <h5 className='signout'>Sign Out</h5>
        </a>
        <Masterhead/>
        <div className="body-container2-1">
          <span>STEP <span className='bold'>1</span> OF <span className='bold'>3</span></span>
          <h2>Choose the plan that's right for you</h2>
        </div>
        <div className="body-container2-2">
            <PlanCard title1='Premium' isSelected={selectedCard === 'Premium'} onSelect={() => handleSelect('Premium')} gradient="linear-gradient(to top left, #eb0018, #333e99)"/>
            <PlanCard2 title1='Standard' title2='1080p' v1='USD 7.99' v4='TV, computer, mobile phone, tablet' v3='1080p (Full HD)' v2='Great' v5='2' v6='2' isSelected={selectedCard === 'Standerd'} onSelect={() => handleSelect('Standerd')} gradient="linear-gradient(to top left, #a339d5, #333e99)"/>
            <PlanCard2 title1='Basic' title2='720p' v1='USD 3.99' v4='TV, computer, mobile phone, tablet' v3='720p (HD)' v2='Good' v5='1' v6='1' isSelected={selectedCard === 'Basic'} onSelect={() => handleSelect('Basic')} gradient="linear-gradient(to top left, #653cd9, #333e99)"/>
            <PlanCard2 title1='Mobile' title2='480p' v1='USD 2.99' v4='Mobile phone, tablet' v3='480p' v2='Fair' v5='1' v6='1' isSelected={selectedCard === 'Mobile'} onSelect={() => handleSelect('Mobile')} gradient="linear-gradient(to top left, #226ddc, #333e99)"/>
        </div>
        <div className="body-container2-3">
          <p className='planform-info'>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. <span className='terms-of-use-text'>See our Terms</span> of Use for more details.
          Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
          <Button variant="danger" onClick={packageSelected} className='btn-5'>Next</Button>
        </div>
        <Globalfooter/>
    </div>
  )
}
