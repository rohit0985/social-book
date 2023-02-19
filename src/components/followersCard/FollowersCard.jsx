import React from 'react'
import "./FollowersCard.css"
import { followers } from '../../Data/followersData'

const FollowersCard = () => {
  return (
    <div className='followersCard'>
     {
        followers.length && followers.map((follower, idx)=> {
            return (
                <div className="follower" key={idx}>
                <div>
                    <img src={follower.img} className="followerImage" alt="follower-image" />
                    <div className="followerName">
                        <span>{follower.name}</span>
                        <span>@{follower.username}</span>
                    </div>
                </div>
                <button className='button fc-button'>Follow</button>
                </div>
            )
        })
     }
    </div>
  )
}

export default FollowersCard
