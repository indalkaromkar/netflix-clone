import React, { useState } from 'react';
import './Styles/PaymentGateway.css'
import Masterhead from '../Components/Masterhead'
import Globalfooter from '../Components/Globalfooter'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';

export default function PaymentGateway() {

const location = useLocation();
const navigate = useNavigate();
const {selectedCard,packagePrice,email} = location.state || {}; 

const[value, setValue]=useState('');
const[cnameborderColor, setCnameBorderColor]=useState('');
const[iscardnamevalid,setIscardnamevalid]=useState(false);
const[cnumborderColor, setCnumBorderColor]=useState('');
const[iscardnumbervalid,setIscardnumbervalid]=useState(false);
const[cvvborderColor, setCvvBorderColor]=useState('');
const[iscvvvalid,setIscvvvalid]=useState(false);
const[edborderColor, setEdBorderColor]=useState('');
const[isexpdatevalid,setIsexpdatevalid]=useState(false);
const[placeholder, setPlaceholder]=useState('Expiration date');
const[isChecked, setIsChecked]=useState(false);
const[uncheckError,setUncheckError]=useState(false);
const[defaultCard,setDefaultCard]=useState(true);
const[visaCard,setVisaCard]=useState(false);
const[masterCard,setMasterCard]=useState(false);
const[amexCard,setAmexCard]=useState(false);
const[cardErrorDisplay,SetCardErrorDisplay]=useState(false);

function handlePayment(){ 
   let cardName=document.getElementById('cc-name').value;
   let cardNumber=document.getElementById('cc-number').value;
   let cvv=document.getElementById('cc-csc').value;
   let expDate=document.getElementById('cc-exp').value;
   let packageName=selectedCard;
   
   const validateField = (value, setBorderColor, setValidity) => {
    if (value === '') {
      setBorderColor('red');
      setValidity(true);
    } else {
      setBorderColor('');
      setValidity(false);
    }
  };
  
    validateField(cardName, setCnameBorderColor, setIscardnamevalid);
    validateField(cardNumber, setCnumBorderColor, setIscardnumbervalid);
    validateField(cvv, setCvvBorderColor, setIscvvvalid);
    validateField(expDate, setEdBorderColor, setIsexpdatevalid);  
   
   isChecked?setUncheckError(false):setUncheckError(true);

   if(cardName!=''&&cardNumber!=''&&cvv!=''&&expDate!=''&&isChecked){
    validateCard(email, cardNumber, cardName, expDate)
    .then(isValid => {
        if (isValid) {
            proceedPayment(packagePrice, email, cardNumber, cardName, cvv, expDate);
            subscribePlan(email, packageName);
            navigate('/browse',{state:{email:email}});
        } else {
            SetCardErrorDisplay(true);
        }
    });
    }
}

function validateCard(email, cardNumber, cardHoldName, expDate) { // check, is card valid(card number & expire date)
    return fetch('http://localhost:8080/api/payment/card', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            cardNumber: cardNumber,
            cardHoldName: cardHoldName,
            expDate: expDate,
        }),
    })
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        return data; 
    });
}

function subscribePlan(email,packageName){ // register select plan to user email
    fetch(`http://localhost:8080/api/subscribe`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email:email,
            plan:packageName
        })
    })
}

async function proceedPayment(paymentAmount, email, cardNumber, cardHoldName, cvv, expDate) { // store payment/card details 
    await fetch('http://localhost:8080/api/payment/proceed', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            newCard: {
                email: email,
                cardNumber: cardNumber,
                cardHoldName: cardHoldName,
                expDate: expDate,
                cvv: parseInt(cvv, 10)
            },
            newPayment: {
                email: email,
                cardNumber: cardNumber,
                paymentAmount: paymentAmount
            }
        }),
    });
}


const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };


function planChange(){
    navigate('/signup/planform',{state:{email:email}});
}

const handleFocus = () => {
    setPlaceholder('MM/YY');
};

const handleBlur = () => {
    setPlaceholder('Expiration date');
};

const handleChange = (e) => {
let inputValue = e.target.value.replace(/\D/g, ''); 

if (inputValue.length >= 2) {
    inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2, 4);
}

setValue(inputValue);
};

const handleKeyDown = (e) => {
    if (e.key === 'Backspace' && value.endsWith('/')) {
      e.preventDefault();
      setValue(value.slice(0, -1));
    }
};

const [cardNumber, setCardNumber] = useState('');

const handleCardNumberChange = (e) => {
  let formattedNumber = e.target.value.replace(/\D/g, '');

  if (formattedNumber.length > 4) {
    formattedNumber = formattedNumber.match(/.{1,4}/g).join(' ');
  }

  setCardNumber(formattedNumber);
  identifyCardType(formattedNumber);
};

const handleCardNumberKeyDown = (e) => {
  if (e.key === 'Backspace' && cardNumber.endsWith(' ')) {
    e.preventDefault();
    setCardNumber(cardNumber.slice(0, -1)); 
  }
};

const [cvv, setCvv] = useState('');

const handleCvvChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ''); 
    setCvv(inputValue);
};

const identifyCardType = (number) => {
    if (number.length < 1) setDefaultCard(true);
    const firstTwoDigits = number.slice(0, 2);
    const firstFourDigits = number.slice(0, 4);
    if (number.startsWith('4')) {
        setDefaultCard(false);
        setVisaCard(true);
        setMasterCard(false);
        setAmexCard(false);
    } else if (['51', '52', '53', '54', '55'].includes(firstTwoDigits) || (firstFourDigits >= '2221' && firstFourDigits <= '2720')) {
        setDefaultCard(false);
        setMasterCard(true);
        setVisaCard(false);
        setAmexCard(false);
    } else if (['34', '37'].includes(firstTwoDigits)) {
        setDefaultCard(false);
        setAmexCard(true);
        setVisaCard(false);
        setMasterCard(false);
    } else {
        setDefaultCard(true);
        setVisaCard(false);
        setMasterCard(false);
        setAmexCard(false);
    }
  };

  return (
    <div>
        <a href='/signup/logout' className="signout-btn">
            <h5 className='signout'>Sign Out</h5>
        </a>
        <Masterhead/>
        <div className="body-container2">
            <div className="credit-container">
                {cardErrorDisplay && <div className="error-message error-preview-2 payment-error">
                  <img className='error-img' src='/Assets/error.png'></img>
                  <span className='error payment-error-text'>There appears to be a problem<br></br> with the card you are trying to use.<br></br> Please use a different card or check<br></br> with your bank to make sure your card is enabled for international transactions.</span>
                </div>}
                <span>STEP <span className='bold'>3</span> OF <span className='bold'>3</span></span>
                <h2>Set up your credit or debit card</h2>
                <div className="payment-types-container">
                    <img src='/Assets/visa.png'></img>
                    <img src='/Assets/master.png'></img>
                    <img src='/Assets/amex.png'></img>
                </div>
            <Form>
                    <div className="input-sections">
                        <Form.Control  id='cc-number' className='credit-input' type="text" placeholder="Card number" value={cardNumber} onChange={handleCardNumberChange} onKeyDown={handleCardNumberKeyDown} maxLength="19" style={{ borderColor: cnumborderColor }}/>
                        {defaultCard && <img className='input-icon ' src='/Assets/input-cardno.png'></img>}
                        {visaCard && <img className='input-icon input-icon5' src='/Assets/visa.png'></img>}
                        {masterCard && <img className='input-icon input-icon5' src='/Assets/master.png'></img>}
                        {amexCard && <img className='input-icon input-icon5' src='/Assets/amex.png'></img>}
                    </div>
                    {iscardnumbervalid && <div className="fill-error">Please enter a card number.</div>}                
                    <div className="input-sections2">
                        <Form.Control  id='cc-exp' className='credit-input' type="text" value={value} onChange={handleChange} onKeyDown={handleKeyDown} placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur} maxLength="5" style={{ borderColor: edborderColor }}/>
                        <Form.Control  id='cc-csc' className='credit-input' type="password" placeholder="CVV" value={cvv} onChange={handleCvvChange} maxLength="3"style={{ borderColor: cvvborderColor }} />
                        <img className='input-icon-cvv' src='/Assets/input-cvv.png'></img>
                    </div>
                    <div className="fill-error-conatiner">
                        <div className="fill-error-left">
                            {isexpdatevalid && <div className="fill-error">Please enter an expiration date.</div>}
                        </div>
                        <div className="fill-error-right">
                            {iscvvvalid && <div className="fill-error">Please enter a CVV.</div>}
                        </div>                         
                    </div>                   
                    <div className="input-sections">
                        <Form.Control  id='cc-name' className='credit-input' type="text" placeholder="Name on card" style={{ borderColor: cnameborderColor }}/>
                    </div>
                    {iscardnamevalid && <div className="fill-error">Name is required.</div>}                     
                </Form>
                <div className="package-info">
                    <p className='package-price'>USD <span>{packagePrice}</span>/month</p>
                    <p className='package-name'>{selectedCard}</p>
                    <a onClick={planChange} className='package-change text-primary'>Change</a>
                </div>
                <p className='payment-terms'>By checking the checkbox below, you agree to our <span className='text-primary'>Terms of Use</span> , <span className='text-primary'>Privacy Statement</span>, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently USD <span>{packagePrice}</span>/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.</p>
                <div className="check-box">
                    <Form.Check className='ch-box' aria-label="option 1" checked={isChecked} onChange={handleCheckboxChange}/>&nbsp; I agree.
                </div>
                {uncheckError && <div className="uncheck-error">You must acknowledge that you have read and agree to the Terms of Use to continue.</div>}  
                <br></br>
                <Button onClick={handlePayment} variant="danger" className='btn-4'>Start Membership</Button><br></br>
                <p className='payment-terms'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-primary'>Learn more</span> .</p>
                <br></br><br></br><br></br>
            </div>
        </div>
        <Globalfooter/>
    </div>
  )
}
