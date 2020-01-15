import React from 'react'

import './stage.css'
import PostList from '../posts/PostList'
import CommitHistory from '../history/CommitHistory'

export default () => {
  return <div className='stage-wrapper md:flex md:flex-row justify-between mx-auto px-4 min-w-full'>
    <PostList />
    <CommitHistory />
  </div>
}