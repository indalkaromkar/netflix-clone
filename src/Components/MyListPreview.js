import React from 'react'
import './Styles/MyListPreview.css'

export default function MyListPreview({email,selectedProfileName,videoTitle,videoCategory,releaseYear,thumbnail}) {

    function removeFromList(){ // Delete from myList
      fetch(`http://localhost:8080/api/list/delete/${email}/${selectedProfileName}/${videoTitle}`, {
        method: "DELETE",
      })
    }

  return (
    <div className='MyListPreview-container'>
        <div className="innerMyListPreview">
            <div className="div0"><i className="bi bi-three-dots-vertical"></i></div>
            <div className={`previewImg ${thumbnail}`}></div>
            <div className="div1">{videoTitle}</div>
            <div className="div2">{releaseYear}</div>
            <div className="div3">{videoCategory}</div>
            <div className="div4" onClick={removeFromList}><i className="bi bi-x-lg"></i></div>
            <div className="div01"><i className="bi bi-three-dots-vertical"></i></div>
        </div>
        <div className="divider2"></div>
    </div>
  )
}
