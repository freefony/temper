import React, { Component } from 'react'

import './stage.css'
import PostList from '../posts/PostList'
import CommitHistory from '../comit_history/CommitHistory'
import { StoreProvider } from '../common/store'

export default class Stage extends Component {
  render() {
    return <div className='stage-wrapper md:flex md:flex-row justify-between mx-auto px-4 min-w-full'>
      <StoreProvider>
        <PostList />
        <CommitHistory />
      </StoreProvider>
    </div>
  }
}