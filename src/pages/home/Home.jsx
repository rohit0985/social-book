import React from 'react'
import ProfileSide from '../../components/profileSide/ProfileSide'
import "./Home.css"


const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="profileSide">
        <ProfileSide/>
        </div>
        <div className="postSide">post</div>
        <div className="rightSide">right</div>
      </div>
    </div>
  )
}

export default Home
