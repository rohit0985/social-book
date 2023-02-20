import React from 'react'
import "./InfoCard.css"
import {UilPen} from "@iconscout/react-unicons"

const InfoCard = () => {
  return (
    <div className='infoCard'>
     <div className="infoHead">
        <h4>Your info</h4>
        <UilPen/>
     </div>

     <div className="info">
        <span><b>Status</b></span>
        <span>in a relationship</span>
     </div>
     <div className="info">
        <span><b>Lives in</b></span>
        <span>Lucknow</span>
     </div>
     <div className="info">
        <span><b>Works at</b></span>
        <span>Mesho</span>
     </div>
     <button className='button l-button'>Logout</button>
    </div>
  )
}

export default InfoCard
