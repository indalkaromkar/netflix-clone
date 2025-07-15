import React, { useState, useEffect } from 'react';
import './Styles/ManageProfile.css'
import AddProfile from './AddProfile'
import ProfileManage from './ProfileManage'

export default function ManageProfile({hideManageProfile,email}) {
    const[addProfile,setAddProfile]=useState(false);
    const [profiles, setProfiles] = useState([]);

    function showAddProfile(){
        setAddProfile(true);
    }
    function hideAddProfile(){
        setAddProfile(false);
    }

    const fetchProfiles = () => { //Retrive all profiles registerd under the email
        fetch(`http://localhost:8080/api/profiles/${email}`)
        .then(response => response.json())
        .then(data => setProfiles(data));
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
        <p className='text-light profile-pick-header'>Manage Profile:</p><br></br>
        <div className="profile-container">
            <div className="profile-preview-container">
                {profiles.map(profile => (
                    <ProfileManage 
                        email={email}
                        profileName={profile.profileName} 
                        profilePicture={profile.profilePicture}
                        language={profile.language} 
                        maturity={profile.maturity} 
                        gameHandle={profile.gameHandle} 
                    />
                ))}
            </div>
            <a onClick={showAddProfile} className="add-profile-container">
                <img className='add-img' src='./Assets/add.png'></img>
                <p className='profile-preview-name'>Add Profile</p>
            </a>
        </div>
        <a onClick={hideManageProfile} className="manage-profile-btn manage-done">
            <p className='manage-profile-btn-text'>Done</p>
        </a>
    </div>
  )
}
