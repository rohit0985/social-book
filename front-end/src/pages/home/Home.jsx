import React from 'react'
import PostSide from '../../components/postSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/rightSide/RightSide'
import "./Home.css"


const Home = () => {
  return (
    <div>
      <div className="home">
       
        <div className="profileSide">
        <ProfileSide/>
        </div>

        <div className="postSide">
          <PostSide/>
        </div>

        <div className="rightSide">
        <RightSide/>
        </div>

      </div>
    </div>
  )
}

export default Home
