import React, { useState } from 'react'
import './Styles/Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GlobalFooter2 from '../Components/Globalfooter2';
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const navigate=useNavigate();

    const[messageRateText,setMessageRateText]=useState(false);
    const[signInBtn,setSignInBtn]=useState(true);
    const[signInCodeBtn,setSignInCodeBtn]=useState(false);
    const[signCodeBtn,setSignCodeBtn]=useState(true);
    const[usePasswordBtn,setUsePassword]=useState(false);
    const[passwordInput,setPasswordInput]=useState(true);
    const[showPassword,setShowPassword]=useState(true);
    const[hidePassword,setHidePassword]=useState(false);
    const[passwordVisible,setPasswordVisible]=useState(false);

    function visiblePassword(){
        setHidePassword(true);
        setPasswordVisible(true);
        setShowPassword(false);
    }
    function nonVisiblePassword(){
        setShowPassword(true);
        setPasswordVisible(false);
        setHidePassword(false);
    }

    function usePassword(){
        setPasswordInput(true);
        setSignCodeBtn(true);
        setUsePassword(false);
        setMessageRateText(false);
        setSignInBtn(true);
        setSignInCodeBtn(false);
        setShowPassword(true);
        setHidePassword(false);
        setPasswordVisible(false);
    }
    function useCode(){
        setPasswordInput(false);
        setSignCodeBtn(false);
        setUsePassword(true);
        setMessageRateText(true);
        setSignInBtn(false);
        setSignInCodeBtn(true);
        setShowPassword(false);
        setHidePassword(false);
    }

    const[errorMessage,setErrorMessage]=useState(false);
    const[emailInput,setEmailInput]=useState('');
  
  function signIn(){
      let email=document.getElementById('inputEmail').value;
      let password=document.getElementById('inputPassword').value;
      setEmailInput(email);
      verfyEmail(email)
      .then(isEmailValid => {
        if (isEmailValid) {
            authenticator(email,password)
            .then(isCredentialsValid => {
              if (isCredentialsValid) {
                  subscriptionValidator(email)
                  .then(isSubscriptionValid => {
                    if (isSubscriptionValid) {
                        navigate('/browse',{state:{email:email}});
                    } else {
                        navigate(`/signup/plan`,{state:{email:email}}); 
                    }
                  });
              } else {
                  setErrorMessage(true);
              }
            });
        } else {
            setErrorMessage(true);
        }
      });
  }

  function verfyEmail(email){ //check, is email already registerd or not
    return fetch(`http://localhost:8080/api/verifyEmail/${email}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data; 
    });
  }

  function authenticator(email,password){ //check, is login credentials correct
    return fetch(`http://localhost:8080/api/authenticator/${email}/${password}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data; 
    });
  }

  function subscriptionValidator(email){ //check, is subscription valid(not expired) & are there any subscription to the user
    return fetch(`http://localhost:8080/api/subscribe/${email}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data; 
    });
  }

  return (
    <div>
        <div className="home-main-container home-main-container-error">
          <div className="hero-masterhead">
            <img className='brand-logo barnd-logo-login' src='/Assets/Netflix-brand.png'></img>
          </div>
          <div className="login-container">
            <div className="login-inner-container">
                <h2 className='signin-header'>Sign In</h2>
                {errorMessage && <div className="error-message error-preview-2">
                  <img className='error-img' src='/Assets/error.png'></img>
                  <span className='error'>Incorrect password for<br></br>{emailInput}</span>
                </div>}
                <Form.Control id='inputEmail' className='email-input-login py-3' type="email" placeholder="Email or mobile number" />
                {messageRateText && <p className='message-rate'>Message and data rates may apply</p>}
                {showPassword && <img onClick={visiblePassword} className='passwordToggle passwordToggle3' src='./Assets/showwhite.png'></img>}
                {hidePassword && <img onClick={nonVisiblePassword}  className='passwordToggle passwordToggle3' src='./Assets/hidewhite.png'></img>}      
                {passwordInput && <Form.Control id='inputPassword' className='email-input-login py-3' type={passwordVisible ? 'text' : 'password'} placeholder="Password" />} 
                {signInBtn && <Button onClick={signIn} variant="danger" className='btn-4 signin-btn2 login-btn'>Sign In</Button>}             
                {signInCodeBtn && <Button variant="danger" className='btn-4 signin-btn2 login-btn'>Send Sign-In Code</Button>}     
                <p className='signin-text'>OR</p>
                {signCodeBtn && <Button variant="light" onClick={useCode} className='text-light btn-4 signin-btn2 signin-btn-code login-btn'>Use a Sign-In Code</Button>}
                {usePasswordBtn && <Button variant="light" onClick={usePassword} className='text-light btn-4 signin-btn2 signin-btn-code login-btn'>Use Password</Button>}
                <div className="check-box signin-check-box">
                    <Form.Check className='ch-box' aria-label="option 1" />&nbsp; Remember me
                </div>
                <p className='new-to-netflix'>New to Netflix? <a href='/' className='signup-link'>Sign Up now.</a></p>
                <p className='signin-info'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-primary'>Learn more</span>.</p>
            </div>
          </div>     
        </div>
        <div className="home-main-shadow home-main-shadow2 home-main-shadow2-error"></div>
        <div className="home-main-hero home-main-hero2"></div> 
        <GlobalFooter2/>
    </div>
  )
}
