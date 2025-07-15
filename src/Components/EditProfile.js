import React, { useState } from 'react'
import './Styles/EditProfile.css'
import Form from 'react-bootstrap/Form';
import ChoosePic from './ChoosePic';
import ConfirmDelete from './ConfirmDelete';

export default function EditProfile({hideEditProfile,email,profileName,profilePicture,language,maturity,gameHandle}) {
    const[choosePic,setChoosePic]=useState(false);
    const[dynamicProfileName,setDynamicProfileName]=useState('')
    const[dynamicGameHandle,setDynamicGameHandle]=useState('')
    const[deleteProflie,setDeleteProflie]=useState(false);
    const[selectMaturity,setSelectMaturity]=useState(maturity);
    const [selectLanguage, setSelectLanguage] = useState(language);
    const[profileNameAvailable,setProfileNameAvailable]=useState(false);
    const[profileNameExists,setProfileNameExists]=useState(false);
    const[gameHandleAvailable,setGameHandleAvailable]=useState(false);
    const[gameHandleExists,setGameHandleExists]=useState(false);

    const handleMaturityChange = (event) => {
        setSelectMaturity(event.target.value);
    };

    const handleInputChange = (event) => {
        setDynamicProfileName(event.target.value);
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

    const handleInputChange2 = (event) => {
        setDynamicGameHandle(event.target.value);
        if(event.target.value!=''){
        validateGameHandle(event.target.value)
        .then(isValid => {
            if (isValid) {
              setGameHandleAvailable(true);
              setGameHandleExists(false);
            } else {
              setGameHandleExists(true);
              setGameHandleAvailable(false);
            }
        });
        }
        else{
            setGameHandleAvailable(false);
            setGameHandleExists(false);
        }
    };

    const handleLanguageChange = (event) => {
        setSelectLanguage(event.target.value);
    };

    function showChoosePic(){
        setChoosePic(true);
    }
    function hideChoosePic(){
        setChoosePic(false);
    }
    function showDeleteProfile(){
        setDeleteProflie(true);
    }
    function hideDeleteProfile(){
        setDeleteProflie(false);
    }
    const[newProfilePicture,setNewProfilePicture]=useState(profilePicture);

    function handleUpdateProfile(){
        let updateProfileName=document.getElementById('updateName').value;
        let updateProfilePicture=newProfilePicture;
        let updateGameHandle=document.getElementById('updateGame').value;
        let updateLanguage=selectLanguage;
        let updateMaturity=selectMaturity;
        if(updateProfileName==''){
            updateProfileName=profileName;
        }
        if(updateGameHandle==''){
            updateGameHandle=gameHandle;
        }
        if((profileNameAvailable||dynamicProfileName=='')&&(gameHandleAvailable||dynamicGameHandle=='')){
            updateProfile(updateProfileName,updateProfilePicture,updateGameHandle,updateLanguage,updateMaturity);
            hideEditProfile();
        }
    }

    function updateProfile(updateProfileName,updateProfilePicture,updateGameHandle,updateLanguage,updateMaturity){ // update the profile and myList with new data
        fetch(`http://localhost:8080/api/profile/update/${email}/${profileName}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:email,
                profilePicture:updateProfilePicture,
                profileName:updateProfileName,
                language:updateLanguage,
                maturity:updateMaturity,
                gameHandle:updateGameHandle
            }),
        });
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

    function validateGameHandle(dynamicGameHandle) { // check,is game handle already taken or not
        return fetch(`http://localhost:8080/api/profile/validate/${dynamicGameHandle}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          return data; 
        });
    }

  return (
    <div className="expand-Container edit-Container">
        {choosePic &&  <ChoosePic hideChoosePic={hideChoosePic} profilePicture={profilePicture} setNewProfilePicture={setNewProfilePicture}/>}
        {deleteProflie && <ConfirmDelete hideDeleteProfile={hideDeleteProfile} hideEditProfile={hideEditProfile} profileName={profileName} profilePicture={profilePicture} email={email}/>}
        <div className="edit-container-inner">
            <p className='cancel-bottom edit-header'>Edit Profile</p>
            <hr className='edit-line'></hr>
            <div className="edit-middle-container">
                <div className={`edit-middle-left ${newProfilePicture}`}></div>
                <a onClick={showChoosePic} className="profile-preview-overlay edit-overlay">
                <img className='edit-pic' src='./Assets/edit.png'></img>
                </a>
                <div className="edit-middle-right">
                <Form.Control id='updateName' className='add-profile-name edit-profile-name' type="text" placeholder={profileName} value={dynamicProfileName} onChange={handleInputChange}/>
                {profileNameAvailable && <div className="profile-name-validate"><i class="bi bi-check-circle-fill"></i> Profile name is available.</div>}
                {profileNameExists && <div className="profile-name-validate profile-name-notvalidate"><i class="bi bi-x-circle-fill"></i> Profile name already exists.</div>}
                <br></br>
                <p className='cancel-bottom option-heading'>Language:</p><br></br>
                <Form.Select className='dropmenu' id='languageDropdown' defaultValue={language} onChange={handleLanguageChange}>
                    <option value="English">English</option>
                    <option value="Spanish">Español</option>
                    <option value="French">Français</option>
                    <option value="German">Deutsch</option>
                    <option value="Portuguese">Português</option>
                    <option value="Italian">Italiano</option>
                    <option value="Dutch">Nederlands</option>
                    <option value="Korean">한국어</option>
                    <option value="Japanese">日本語</option>
                    <option value="ChineseSimplified">简体中文</option>
                    <option value="ChineseTraditional">繁體中文</option>
                    <option value="Arabic">العربية</option>
                    <option value="Turkish">Türkçe</option>
                    <option value="Russian">Русский</option>
                    <option value="Hindi">हिन्दी</option>     
                </Form.Select>
                <p className='cancel-bottom option-heading'>Game Handle:</p>
                <p className='cancel-bottom option-sub'>Your handle is a unique name that'll be used for playing with other Netflix members across all Netflix games. <span className='bold'>Learn more</span> </p>
                <Form.Control id='updateGame' className='add-profile-name create-gameHandle' type="text" placeholder={gameHandle? gameHandle: "Create Game Handle"} value={dynamicGameHandle} onChange={handleInputChange2}/>
                {gameHandleAvailable && <div className="profile-name-validate"><i class="bi bi-check-circle-fill"></i> Available.</div>}
                {gameHandleExists && <div className="profile-name-validate profile-name-notvalidate"><i class="bi bi-x-circle-fill"></i> Already exists.</div>} 
                <hr className='edit-line edit-line2'></hr>
                <p className='cancel-bottom option-heading option-heading2'>Maturity Settings:</p>
                <Form.Select className='dropmenu dropmenu2' id='maturityDropdown' onChange={handleMaturityChange}  defaultValue={maturity}>
                    <option value="General Audience">General Audience</option>
                    <option value="Parental Guidance">Parental Guidance</option>
                    <option value="Restricted">Restricted</option>
                    <option value="Adults Only">Adults Only</option>
                    <option value="All Children">All Children</option>
                    <option value="Mature Audience Only">Mature Audience Only</option> 
                </Form.Select>
                <p className='cancel-bottom option-sub'>Show titles of <span className='bold4'>{selectMaturity}</span> for this profile. </p>       
                </div>
            </div>
            <hr className='edit-line edit-line3'></hr>
            <div className="btn-container-add">
                <a onClick={handleUpdateProfile} className='add-profile-btn2 save-btn-profile'>Save</a>
                <a onClick={hideEditProfile} className="add-profile-btn2 edit-profile-btns">Cancel</a>
                <a onClick={showDeleteProfile} className="add-profile-btn2 edit-profile-btns">Delete Profile</a>
            </div>
        </div>
    </div>
  )
}
