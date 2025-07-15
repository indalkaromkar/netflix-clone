import React, { useState } from 'react'
import './Styles/Signin_component.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Signin_component({email}) {

  const navigate=useNavigate();
  const[errorMessage,setErrorMessage]=useState(false);
  const [borderColor, setBorderColor] = useState('');
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
  
  function showErrorMessage(){
    setErrorMessage(true);
  }

  function signIn(){
    let inputPassword=document.getElementById('userPasswordInput').value;
    if(inputPassword==''){
      setBorderColor('red');
    }
    else{
      authenticator(email,inputPassword)
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
          showErrorMessage();
        }
      });
    }
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
    <div className='inner-container'>
      {errorMessage && <div className="error-message">
        <img className='error-img' src='/Assets/error.png'></img>
        <span className='error'>Incorrect password.</span>&nbsp;Please try again 
      </div>}  
      <span>STEP <span className='bold'>1</span> OF <span className='bold'>3</span></span>
      <h2>Welcome back!<br></br>
      Joining Netflix is easy.</h2>
      <h6>Enter your password and you'll be watching in no time.</h6><br></br>
      <span>Email</span>
      <span className='userEmail'>{email}</span><br></br>
      <Form>
          {showPassword && <img onClick={visiblePassword} className='passwordToggle' src='./Assets/show.png'></img>}
          {hidePassword && <img onClick={nonVisiblePassword}  className='passwordToggle' src='./Assets/hide.png'></img>}
          <Form.Control autoComplete="current-password" id='userPasswordInput' className='password-input' type={passwordVisible ? 'text' : 'password'} placeholder="Enter your password" style={{ borderColor: borderColor }}/>
      </Form><br></br>
      <Button onClick={signIn} variant="danger" className='btn-4'>Next</Button>
    </div>
  )
}
