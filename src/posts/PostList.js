import React from 'react'
import Post from './Post'

const PostList = ({ posts, onChangePosition }) => {
  return <div className='container'>
    <div className='text-2xl text-white text-left'>Sortable Post List</div>
    {posts.map((post, i) => {
      return <Post 
        post={post} 
        key={i} 
        onChangePosition={onChangePosition}
        canMoveUp={(i > 0)}
        canMoveDown={(i < posts.length - 1)}
        position={i}
      />
    })}
  </div>

}

export default PostList