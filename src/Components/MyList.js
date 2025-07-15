import React, { useState, useEffect } from 'react';
import './Styles/MyList.css';
import MyListPreview from './MyListPreview';

export default function MyList({ email, selectedProfileName }) {

  const [listContent, setListContent] = useState([]);

  const fetchList = () => { // Retrieve list
    fetch(`http://localhost:8080/api/list/${email}/${selectedProfileName}`)
      .then(response => response.json())
      .then(data => {
        setListContent(data);
      });
  };

  useEffect(() => {
    fetchList(); 
    const intervalId = setInterval(fetchList, 10); 
    return () => clearInterval(intervalId);
  }, [email, selectedProfileName]); 

  return (
    <div className='myListContainer'>
      <div className="myList-inner">
        <p className='text-light add-profile-header cancel-bottom myListHeading'>My List</p><br /><br />
        <div className="divider"></div>
        {listContent.map((item, index) => (
          <MyListPreview 
            key={index}
            email={item.email}
            selectedProfileName={selectedProfileName}
            videoTitle={item.videoTitle}
            videoCategory={item.videoCategory}
            releaseYear={item.releaseYear}
            thumbnail={item.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
