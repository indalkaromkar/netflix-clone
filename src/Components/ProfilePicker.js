import React, { useState, useEffect } from 'react';
import './Styles/ProfilePicker.css'
import ProfilePreview from './ProfilePreview'
import AddProfile from './AddProfile'
import ManageProfile from './ManageProfile';

export default function ProfilePicker({hideProfilePick,setSelectedProfile,setSelectedProfileName,email,setProfilesNavBar}) {
    const[addProfile,setAddProfile]=useState(false);
    const[manageProfile,setManageProfile]=useState(false);
    const [profiles, setProfiles] = useState([]);

    function showAddProfile(){
        setAddProfile(true);
    }
    function hideAddProfile(){
        setAddProfile(false);
    }
    function showManageProfile(){
        setManageProfile(true);
    }
    function hideManageProfile(){
        setManageProfile(false);
    }

    const fetchProfiles = () => { //Retrive all profiles registerd under the email
        fetch(`http://localhost:8080/api/profiles/${email}`)
        .then(response => response.json())
        .then(data => {
            setProfiles(data);
            setProfilesNavBar(data);
        })
    };
  
    useEffect(() => {
        fetchProfiles();
    }, [email]);

    useEffect(() => {
        fetchProfiles();
        const interval = setInterval(fetchProfiles,10); 
        return () => clearInterval(interval); 
    }, [email]);

  return (
    <div className='expand-Container'>
        {addProfile && <AddProfile hideAddProfile={hideAddProfile} email={email}/>} 
        {manageProfile && <ManageProfile hideManageProfile={hideManageProfile} email={email}/>}   
        <p className='text-light profile-pick-header'>Who's watching?</p><br></br>
        <div className="profile-container">
            <div className="profile-preview-container">
                {profiles.map(profile => (
                    <ProfilePreview 
                        key={profile.profileName}
                        profileName={profile.profileName} 
                        profilePicture={profile.profilePicture}
                        hideProfilePick={hideProfilePick}
                        setSelectedProfile={setSelectedProfile}
                        setSelectedProfileName={setSelectedProfileName}
                    />
                ))}
            </div>
            <a onClick={showAddProfile} className="add-profile-container">
                <img className='add-img' src='./Assets/add.png'></img>
                <p className='profile-preview-name'>Add Profile</p>
            </a>
        </div>
        <a onClick={showManageProfile}  className="manage-profile-btn">
            <p className='manage-profile-btn-text'>Manage Profiles</p>
        </a>
    </div>
  )
}
