import React  from 'react'
import Post from './Post'
import { connect } from '../common/store'
import { CSSTransition } from 'react-transition-group'

const PostList = ({ posts =[], changePostPosition }) => {
  return <div className='container'>
    <div className='text-xl text-white text-left mb-4'>Sortable Post List</div>
    {posts.map((post, i) => {
      return <CSSTransition
      unmountOnExit
      in={posts.length ? true : false}
      timeout={{ appear: 0, enter: 0, exit: 300 }}
      classNames='slide-in-down'
      appear
      key={i}
    >
      <Post 
        post={post}  
        onChangePosition={changePostPosition}
        canMoveUp={(i > 0)}
        canMoveDown={(i < posts.length - 1)}
        position={i}
      />
    </CSSTransition>
    })}
  </div>

}

export default connect()(PostList)