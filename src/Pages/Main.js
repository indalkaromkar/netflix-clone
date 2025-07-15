import React, { useState } from 'react'
import './Styles/Main.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
import GlobalFooter2 from '../Components/Globalfooter2';


export default function Main() {

  const[emailReq1,setEmailReq1]=useState(false);
  const[emailReq2,setEmailReq2]=useState(false);
  const [borderColor, setBorderColor] = useState('');
  const [borderColor2, setBorderColor2] = useState('');
  const navigate=useNavigate();

  function showEmailReq1(){
    setEmailReq1(true);
    setBorderColor('red');
  }
  function showEmailReq2(){
    setEmailReq2(true);
    setBorderColor2('red');
  }
  function hideEmailReq1(){
    setEmailReq1(false);
    setBorderColor('');
  }
  function hideEmailReq2(){
    setEmailReq2(false);
    setBorderColor2('');
  }
  function getStarted(){ 
    const userInput=document.getElementById('userEmailInput').value;
    const userInput2=document.getElementById('userEmailInput2').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let Email='';
    if(userInput){
      if(emailPattern.test(userInput)){
        Email=userInput;
      }else{
        showEmailReq1();
      }
    }
    if(userInput2){
      if(emailPattern.test(userInput2)){
        Email=userInput2;
      }else{
        showEmailReq1();
      }
    }
    if(Email){
      verfyEmail(Email)
      .then(isValid => {
        if (isValid) {
          navigate('/signin',{state:{email:Email}});
        } else {
          navigate('/registration',{state:{email:Email}});
        }
      });
    }
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

  return (
    <div>
      <div className="home-main-container">
          <div className="hero-masterhead">
            <img className='brand-logo' src='/Assets/Netflix-brand.png'></img>
            <Button href='/login' className='text-light fw-bold btn-2' variant="danger">Sign In</Button>
          </div>
          <h1>Unlimited movies, TV shows, and more</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
          <div className="form-container">
            <Form className='email-input-container'>
              <Form.Control id="userEmailInput" className='email-input py-3' type="email" placeholder="Email Address"  style={{ borderColor: borderColor }}/>
            </Form>
            <Button onClick={getStarted} className='text-light fw-bold btn-1' variant="danger">Get Started&nbsp; <i class="bi bi-chevron-right"></i></Button>
          </div> 
          {emailReq1 && <div className="profile-name-validate profile-name-notvalidate email-required"><i class="bi bi-x-circle-fill"></i> Email is required.</div> }      
      </div>
      <div className="home-main-shadow"></div>
      <div className="home-main-hero"></div> 
      <div className="home-section1">
        <div className="section-content">
            <h1 className='section-heading'>Enjoy on your TV</h1>
            <h2 className='section-text'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        </div>
        <img className='section-img' src='/Assets/tv.png'></img>
        <div className="video-1">
        <video 
          src="/Assets/video-tv.m4v" 
          loop 
          autoPlay 
          muted 
          className="video"
        ></video>
        </div>
      </div> 
      <div className="home-section2">
        <img className='section-img' src='/Assets/mobile-1.png'></img>
        <div className="section-content">
            <h1 className='section-heading'>Download your shows to watch offline</h1>
            <h2 className='section-text'>Save your favorites easily and always have something to watch.</h2>
        </div>
      </div> 
      <div className="home-section3">
        <div className="section-content">
            <h1 className='section-heading'>Watch everywhere</h1>
            <h2 className='section-text'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
        </div>
      </div>
      <div className="home-section4">
        <img className='section-img' src='/Assets/kids.png'></img>
        <div className="section-content">
            <h1 className='section-heading'>Create profiles for kids</h1>
            <h2 className='section-text'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
        </div>
      </div>
      <div className="home-section5">
        <h1 className='text-light'>Frequently Asked Questions</h1>
        <br></br>
        <Accordion className='faq'>
          <Accordion.Item className='faq-item' eventKey="0">
          <Accordion.Header className='faq-head'>What is Netflix?<img className='plus' src='./Assets/plus.png'></img></Accordion.Header>
          <Accordion.Body className='faq-body'>
            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
            <br></br><br></br>
            You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className='faq-item' eventKey="1">
          <Accordion.Header>How much does Netflix cost?<img className='plus' src='./Assets/plus.png'></img></Accordion.Header>
          <Accordion.Body className='faq-body'>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts.
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className='faq-item' eventKey="2">
          <Accordion.Header>Where can I watch?<img className='plus' src='./Assets/plus.png'></img></Accordion.Header>
          <Accordion.Body className='faq-body'>
            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
            <br></br><br></br>
            You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className='faq-item' eventKey="3">
          <Accordion.Header>How do I cancel?<img className='plus' src='./Assets/plus.png'></img></Accordion.Header>
          <Accordion.Body className='faq-body'>
            Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className='faq-item' eventKey="4">
          <Accordion.Header>What can I watch on Netflix?<img className='plus' src='./Assets/plus.png'></img></Accordion.Header>
          <Accordion.Body className='faq-body'>
            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className='faq-item' eventKey="5">
          <Accordion.Header>Is Netflix good for kids?<img className='plus' src='./Assets/plus.png'></img></Accordion.Header>
          <Accordion.Body className='faq-body'>
            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
            <br></br><br></br>
            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.
          </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br></br><br></br>
        <h4 className='text-light'>Ready to watch? Enter your email to create or restart your membership.</h4>
          <div className="form-container2">
            <Form className='email-input-container'>
              <Form.Control id="userEmailInput2" className='email-input py-3' type="email" placeholder="Email Address"  style={{ borderColor: borderColor2 }}/>
            </Form>
            <Button onClick={getStarted} className='text-light fw-bold btn-2 btn-3' variant="danger">Get Started&nbsp; <i class="bi bi-chevron-right"></i></Button>
          </div> 
          {emailReq2 && <div className="profile-name-validate profile-name-notvalidate email-required2"><i class="bi bi-x-circle-fill"></i> Email is required.</div> }  
      </div> 
      <GlobalFooter2/>
    </div>
  )
}
