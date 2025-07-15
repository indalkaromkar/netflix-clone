import React, { useState } from 'react';

export default function Removefromlist({ placement, email, selectedProfileName, videoTitle }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        removeFromList(); 
    };

    function removeFromList() { // Remove video from 'MyList'
        fetch(`http://localhost:8080/api/list/delete/${email}/${selectedProfileName}/${videoTitle}`, {
            method: "DELETE",
        });
    }

    return (
        <div className="circle-btn list-hover check-btn-fill" onClick={handleClick}>
            <i className="bi bi-check-lg list-action"></i>
            {!isClicked && <div className={`hoverText ${placement}`}>Remove from my list</div>} 
        </div>
    );
}
