import React, { useState } from 'react';
import './Styles/AddProfile.css'
import Form from 'react-bootstrap/Form';

export default function AddProfile({hideAddProfile,email,fetchProfiles}) {

    const [profileName, setInputValue] = useState('');
    const[profileNameAvailable,setProfileNameAvailable]=useState(false);
    const[profileNameExists,setProfileNameExists]=useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        if(event.target.value!=''){
        validateProfileName(event.target.value,email)
        .then(isValid => {
            if (isValid) {
              setProfileNameAvailable(true);
              setProfileNameExists(false);
            } else {
              setProfileNameExists(true);
              setProfileNameAvailable(false);
            }
        });
        }
        else{
            setProfileNameAvailable(false);
            setProfileNameExists(false);
        }
    };

    function addProfile(){
        if(profileName!=''&&profileNameAvailable){
            createProfile(email,profileName); 
            if(fetchProfiles) fetchProfiles();
            hideAddProfile();
        }
    }

    function createProfile(email,profileName){ // create new profile (default Settings) on the email
        fetch(`http://localhost:8080/api/profiles/add`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:email,
                profileName:profileName,
                profilePicture:"icon i1"
            })
        })
    }

    function validateProfileName(profileName, email) { // check,is profile name already taken or not
        return fetch(`http://localhost:8080/api/profile/validate/${email}/${profileName}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          return data; 
        });
    }

    const buttonClassName=profileNameAvailable?'add-profile-btn1 active':'add-profile-btn1';

  return (
    <div className='expand-Container'>
        <div className="add-profile-inner">
            <p className='text-light add-profile-header cancel-bottom'>Add Profile</p>
            <p className='add-profile-sub cancel-bottom'>Add a profile for another person watching Netflix.</p>
            <hr className='add-profile-line'></hr>
            <div className="add-profile-inner-container">
                <div className="profile-pic i1"></div>
                <div className="type-area">
                <Form.Control id='userInput' className='add-profile-name' type="text" placeholder="Name" value={profileName} onChange={handleInputChange}/>
                {profileNameAvailable && <div className="profile-name-validate"><i className="bi bi-check-circle-fill"></i> Profile name is available.</div>}
                {profileNameExists && <div className="profile-name-validate profile-name-notvalidate"><i className="bi bi-x-circle-fill"></i> Profile name already exists.</div>}
                </div>
            </div>
            <hr className='add-profile-line'></hr><br></br>
            <div className="btn-container-add">
                <a onClick={addProfile} className={buttonClassName}>Continue</a>
                <a onClick={hideAddProfile} className="add-profile-btn2">Cancel</a>
            </div>
        </div>
    </div>
  )
}
