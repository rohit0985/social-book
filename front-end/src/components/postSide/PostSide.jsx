import React from 'react'
import Posts from '../posts/Posts'
import PostShare from '../postShare/PostShare'
import "./PostSide.css"

const PostSide = () => {
  return (
    <div className='postSide'>
     <PostShare/>
     <Posts/>
    </div>
  )
}

export default PostSide
