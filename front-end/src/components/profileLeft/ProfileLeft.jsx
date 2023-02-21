import React from 'react'
import LogoSearch from "../logoSearch/LogoSearch"
import FollowersCard from "../followersCard/FollowersCard"
import InfoCard from '../infoCard/InfoCard'
import "./ProfileLeft.css"


const ProfileLeft = () => {
    
  return (
    <div className='profileLeft'>
<LogoSearch/>
<InfoCard/>
<FollowersCard/>

    </div>
  )
}

export default ProfileLeft
