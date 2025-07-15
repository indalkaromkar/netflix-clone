import React, { useState } from 'react';

export default function Addtolist({email,selectedProfileName,placement,videoTitle,videoCategory,releaseYear,thumbnail}) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(true);
      const videoData = {
          email,
          profileName: selectedProfileName,
          videoTitle,
          videoCategory,
          releaseYear,
          thumbnail
      };
      addToList(videoData);
  };

  function addToList(videoData) { //add video from 'MyList'
      fetch(`http://localhost:8080/api/list/add`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(videoData)
      })
  }

  return (
    <div className="circle-btn list-hover" onClick={handleClick}>
        <i className="bi bi-plus-lg list-action"></i>
        {!isClicked && <div className={`hoverText ${placement}`}>Add to my list</div>}  
    </div>
  )
}
