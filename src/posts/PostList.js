import React from 'react'
import Post from './Post'
import { connect } from '../common/store'

const PostList = ({ posts, changePostPosition }) => {
  return <div className='container'>
    <div className='text-2xl text-white text-left'>Sortable Post List</div>
    {posts.map((post, i) => {
      return <Post 
        post={post} 
        key={i} 
        onChangePosition={changePostPosition}
        canMoveUp={(i > 0)}
        canMoveDown={(i < posts.length - 1)}
        position={i}
      />
    })}
  </div>

}

export default connect()(PostList)