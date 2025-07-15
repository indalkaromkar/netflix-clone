import React from 'react'

export default function PlanCard2({title1,title2,v1,v2,v3,v4,v5,v6,isSelected,onSelect,gradient}) {
  return (
    <div className={`card-container ${isSelected ? 'shadow-lg' : ''}`} onClick={onSelect}>
      {isSelected && <div className="selected-tick"><img className='tick-mark' src='/Assets/select.png'></img></div>} 
      <div className="top" style={{ background: gradient }}>
        <h5 className='pckg-name'>{title1}</h5>
        <h5 className='pckg-name'>{title2}</h5>
      </div>
      <div className="bottom">
        <p className='card-heading'>Monthly price</p>
        <p className='card-value'>{v1}</p><hr></hr>
        <p className='card-heading'>Video and sound quality</p>
        <p className='card-value'>{v2}</p><hr></hr>
        <p className='card-heading'>Resolution</p>
        <p className='card-value'>{v3}</p><hr></hr>
        <p className='card-heading'>Supported devices</p>
        <p className='card-value lengthy'>{v4}</p><hr></hr>
        <p className='card-heading lengthy'>Devices your household can watch at the same time</p>
        <p className='card-value'>{v5}</p><hr></hr>
        <p className='card-heading'>Download devices</p>
        <p className='card-value'>{v6}</p>
      </div>
    </div>
  )
}
