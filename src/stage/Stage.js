import React, { Component } from 'react'

import './stage.css'
import PostList from '../posts/PostList'
import CommitHistory from '../comit_history/CommitHistory'

export default class Stage extends Component {
  state = {
    posts: [{
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
    }],
    history: []
  }

  componentDidMount() {

  }

  changeHistory(title, from, to) {
    const history = [...this.state.history]
    history.unshift({title, from, to})
    this.setState(() => ({ history }))
  }

  handleTimeTravel(position) {
    const newHistory = [...this.state.history]
    newHistory.splice(0, position + 1)
    this.setState(() => ({ history: newHistory }))
  }

  changePostPosition (direction, currentIndex) {
    const { posts } = this.state
    const nextIndex = (direction === 'up') ? currentIndex - 1 : currentIndex + 1
    const rearrangedPosts = [...posts]
    const [post] = rearrangedPosts.splice(currentIndex, 1) // remove it from current position

    rearrangedPosts.splice(nextIndex, 0, post) // place it in a new position
    this.setState({posts: rearrangedPosts})
    this.changeHistory(post.title, currentIndex, nextIndex)
  }

  render() {
    return <div className='stage-wrapper md:flex md:flex-row justify-between mx-auto px-4 min-w-full'>
      <PostList 
        posts={this.state.posts} 
        onChangePosition={(direction, currentIndex) => this.changePostPosition(direction, currentIndex)} />
      <CommitHistory history={this.state.history} onTimeTravel={(position) => this.handleTimeTravel(position)} />
    </div>
  }
}