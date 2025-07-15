import React, { useState } from 'react'
import './Styles/ConfirmPic.css'

export default function ConfirmPic({hideConfirm,clickedIcon,hideChoosePic,profilePicture,setNewProfilePicture}) {

    function setProfilePicture(){
        setNewProfilePicture(clickedIcon);
    }

  return (
    <div className="expand-Container">
        <div className="confirmPic-inner">
            <p className='cancel-bottom confirmPic-heading'>Change profile icon?</p>
            <hr className='edit-line edit-line2'></hr>
            <div className="pics2-container">
                <div className={`icon ${profilePicture} select-icon`}>
                    <div className="name">Current</div>
                </div>
                <img className='right-arrow-pic' src='./Assets/right.png'></img>
                <div className={`icon ${clickedIcon} select-icon`}>
                    <div className="name">New</div>
                </div>
            </div><br></br>
            <hr className='edit-line edit-line2'></hr><br></br>
            <div className="btn-container-add confirm-btn confirm-pic">
                <a onClick={() => {hideConfirm();hideChoosePic();setProfilePicture();}} className='add-profile-btn2 save-btn-profile ldi'>Let's Do it</a>
                <a onClick={hideConfirm} className="add-profile-btn2 edit-profile-btns">Not Yet</a>
            </div>
        </div>
    </div>
  )
}


