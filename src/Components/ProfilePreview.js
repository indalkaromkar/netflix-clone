import React from 'react'
import './Styles/ProfilePreview.css'

export default function ProfilePreview({profileName,profilePicture,hideProfilePick,setSelectedProfile,setSelectedProfileName}) {
  return (
    <div>
        <a className={`profile-preview ${profilePicture}`} onClick={() => {hideProfilePick();setSelectedProfile(profilePicture);setSelectedProfileName(profileName)}}>
            <p className='profile-preview-name'>{profileName}</p>
        </a>
    </div>
  )
}
