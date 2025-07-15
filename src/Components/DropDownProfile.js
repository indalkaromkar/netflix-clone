import React from 'react'
import './Styles/DropDownProfile.css'

export default function DropDownProfile({profilePicture,profileName,setSelectedProfile,closeDropdown,setSelectedProfileName}) {
  return (
    <div className='dropDownContainer' onClick={() => {closeDropdown(); setSelectedProfile(profilePicture);setSelectedProfileName(profileName)}}>
        <div className={`profile-icon-dropdown ${profilePicture}`}></div>
        <p className='cancel-bottom profile-name-dropdown'>{profileName}</p>
    </div>
  )
}
