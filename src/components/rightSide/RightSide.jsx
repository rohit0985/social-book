import React from 'react'
import "./RightSide.css"
import Home from "../../img/home.png"
import Notification from "../../img/noti.png"
import Comment from "../../img/comment.png"
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../trendCard/TrendCard'

const RightSide = () => {
  return (
    <div className='rightSide'>
    <div className="navIcons">
      <img src={Home} alt="home-icon" />
      <UilSetting/>
      <img src={Notification} alt="Notification-icon" />
      <img src={Comment} alt="comment-icon" />
    </div>
     <TrendCard/>
     <button className='button r-button' >Share</button>
    </div>
  )
}

export default RightSide
