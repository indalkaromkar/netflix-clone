import React, { useState } from 'react'
import './Styles/Plancard.css'

export default function PlanCard({isSelected,onSelect,gradient}) {
  return (
    <div className={`card-container premium ${isSelected ? 'shadow-lg' : ''}`} onClick={onSelect}>
      {isSelected && <div className="selected-tick"><img className='tick-mark' src='/Assets/select.png'></img></div>}   
      <div className={`premium-header  ${isSelected ? 'bg-color' : ''}`}>
        <p className='premium-header-text'>Most Popular</p>  
      </div>  
      <div className="top" style={{ background: gradient }}>
        <h5 className='pckg-name'>Premium</h5>
        <h5 className='pckg-name'>4K + HDR</h5>
      </div>
      <div className="bottom">
        <p className='card-heading'>Monthly price</p>
        <p className='card-value'>USD 9.99</p><hr></hr>
        <p className='card-heading'>Video and sound quality</p>
        <p className='card-value'>Best</p><hr></hr>
        <p className='card-heading'>Resolution</p>
        <p className='card-value'>4K (Ultra HD) + HDR</p><hr></hr>
        <p className='card-heading'>Spatial audio (immersive sound)</p>
        <p className='card-value'>Included</p><hr></hr>
        <p className='card-heading'>Supported devices</p>
        <p className='card-value lengthy'>TV, computer, mobile phone, tablet</p><hr></hr>
        <p className='card-heading lengthy'>Devices your household can watch at the same time</p>
        <p className='card-value'>4</p><hr></hr>
        <p className='card-heading'>Download devices</p>
        <p className='card-value'>6</p>
      </div>
    </div>
  )
}
