import React, { useState } from 'react';
import './Styles/Signup.css'
import { useNavigate, useLocation } from 'react-router-dom';
import Masterhead from '../Components/Masterhead'
import Globalfooter from '../Components/Globalfooter'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Signup() {

    const [borderColor, setBorderColor] = useState('');
    const location = useLocation();
    const navigate=useNavigate();
    const { email } = location.state || {};
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
  

    function userRegister(){
        const userInput=document.getElementById('userPasswordInput').value;
        if(userInput==''){
            setBorderColor('red');
        }
        else{
            addUser(email,userInput);
            createProfile(email);
            navigate('/signup/plan', {state:{email:email}});
        }
    }

    function addUser(email,password){
        fetch(`http://localhost:8080/api/register`,{ //create new user account
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:email,
                password:password
            })
        })
    }

    function createProfile(email){
        fetch(`http://localhost:8080/api/profile/add`,{ //create default profile for new user
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:email,
                profilePicture:"icon i1"
            })
        })
    }

  return (
    <div>
        <a href='/signup/logout' className="signout-btn">
            <h5 className='signout'>Sign Out</h5>
        </a>
        <Masterhead/>
        <div className="register-body">
            <div className="inner-body regform-inner-body">
                <span>STEP <span className='bold'>1</span> OF <span className='bold'>3</span></span>
                <h2>Create a password to start your membership</h2>
                <h6>Just a few more steps and you're done!<br></br>
                We hate paperwork, too.</h6><br></br>
                <Form className='addPassword'>
                    <Form.Control className='password-input add-password' type="email" defaultValue={email}/>
                    {showPassword && <img onClick={visiblePassword} className='passwordToggle passwordToggle2' src='./Assets/show.png'></img>}
                    {hidePassword && <img onClick={nonVisiblePassword}  className='passwordToggle passwordToggle2' src='./Assets/hide.png'></img>}
                    <Form.Control  id='userPasswordInput' className='password-input add-password' type={passwordVisible ? 'text' : 'password'} placeholder="Add a password"  style={{ borderColor: borderColor }}/><br></br>
                </Form>
                <div className="check-box-add-password">
                    <Form.Check className='ch-box' aria-label="option 1" />&nbsp; Please do not email me Netflix special offers.
                </div><br></br>
                <Button onClick={userRegister} variant="danger" className='btn-4 register-next'>Next</Button>
            </div>
        </div>
        <Globalfooter/>
    </div>
  )
}
