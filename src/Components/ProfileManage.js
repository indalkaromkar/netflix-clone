import React, { useState } from 'react'
import './Styles/ProfileManage.css'
import EditProfile from './EditProfile';

export default function ProfileManage({email,profileName,profilePicture,language,maturity,gameHandle}) {
    const[editProfle,setEditProfile]=useState(false);
    function showEditProfile(){
      setEditProfile(true);
    }
    function hideEditProfile(){
      setEditProfile(false);
    }
  return (
    <div>
        {editProfle && <EditProfile hideEditProfile={hideEditProfile} email={email} profileName={profileName} profilePicture={profilePicture} language={language} maturity={maturity} gameHandle={gameHandle}/>}     
        <a onClick={showEditProfile} className={`profile-preview profile-manage ${profilePicture}`}>
        <a className="profile-preview-overlay"></a>
            <img className='edit-cover' src='./Assets/edit.png'></img>
            <p className='profile-preview-name'>{profileName}</p>
        </a>
    </div>
  )
}
