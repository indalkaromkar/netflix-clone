import React, { useState } from 'react'
import './Styles/ChoosePic.css'
import ConfirmPic from './ConfirmPic';

export default function ChoosePic({hideChoosePic,profilePicture,setNewProfilePicture}) {
    const [clickedIcon, setClickedIcon] = useState(null);
    const [confirm, setConfirm] = useState(false);

    const choosePic = (event) => {
        const iconClass = event.target.className;
        setClickedIcon(iconClass); // Set the clicked icon class
        showConfirm(); // Show the confirm dialog
    };

    function showConfirm(){
        setConfirm(true);
    }
    function hideConfirm(){
        setConfirm(false);
    }

  return (
    <div className='expand-Container'>
        {confirm && <ConfirmPic hideConfirm={hideConfirm} setNewProfilePicture={setNewProfilePicture} clickedIcon={clickedIcon} hideChoosePic={hideChoosePic} profilePicture={profilePicture}/>}
        <div className="header-strip">
            <a onClick={hideChoosePic} className="back-Icon">
                <img className='back-i' src='./Assets/back.png'></img>
            </a>
            <div className="picPicker-heading">
                <p className='cancel-bottom picPicker-heading-text'>Edit Profile</p>
                <p className='cancel-bottom pickPicker-sub'>Choose a profile icon.</p>
            </div>
        </div>
        <div className="pic-container">
        <div onClick={choosePic} className="icon i1"></div>
                <div onClick={choosePic} className="icon i2"></div>
                <div onClick={choosePic} className="icon i3"></div>
                <div onClick={choosePic} className="icon i4"></div>
                <div onClick={choosePic} className="icon i5"></div>
                <div onClick={choosePic} className="icon i6"></div>
                <div onClick={choosePic} className="icon i7"></div>
                <div onClick={choosePic} className="icon i8"></div>
                <div onClick={choosePic} className="icon i9"></div>
                <div onClick={choosePic} className="icon i10"></div>
        </div>
    </div>
  )
}
