import React from 'react'
import Post from './Post'

const PostList = () => {
  const posts = [
    {
      title: 'Post 1',
      body: `temper git:(master) ✗ git pull origin You asked to pull from the remote "origin", 
      but did not specify a branch. `
    },
    {
      title: 'Post 2',
      body: `temper git:(master) ✗ git pull origin You asked to pull from the remote "origin", 
      but did not specify a branch.`
    },
    {
      title: 'Post 3',
      body: `temper git:(master) ✗ git pull origin You asked to pull from the remote "origin", 
      but did not specify a branch.`
    },
    {
      title: 'Post 4',
      body: `temper git:(master) ✗ git pull origin You asked to pull from the remote "origin", 
      but did not specify a branch.`
    },
    {
      title: 'Post 5',
      body: `temper git:(master) ✗ git pull origin You asked to pull from the remote "origin", 
      but did not specify a branch.`
    }
  ]

  return <div className='container'>
    <div className='text-2xl text-white text-left'>Sortable Post List</div>
    {posts.map((post, i) => <Post post={post} key={i} />)}
  </div>

}

export default PostList