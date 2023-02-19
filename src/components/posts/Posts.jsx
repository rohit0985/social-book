import React from 'react'
import "./Posts.css"
import { postsData } from '../../Data/postsData'
import Post from '../post/Post'

const Posts = () => {
  return (
    <div className='posts'>
     {
      postsData && postsData.map((post, idx)=>{
        return(
          <Post data = {post}/>
        )
      })
     }
    </div>
  )
}

export default Posts
