import React, { Component } from 'react'

const StoreContext = React.createContext('store')

class StoreProvider extends Component {
  waiting = true
  state = {
    posts: [
      {
        title: 'No Posts available',
        body: ''
      }
    ],
    history: [],
    error: {}
  }
  
  componentDidMount() {
    this.loadPosts()
  }

  loadPosts = async() => {
    try {
      const allPosts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
      const posts = allPosts.slice(0, 5)
      this.setState({posts})
    } catch(error) {
      console.error(error)
      this.setState(() => ({ error }))
    }
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
    const { children } = this.props
    const { posts, history } = this.state

    const store = {
      posts,
      history,
      changePostPosition: (position, currentIndex) => this.changePostPosition(position, currentIndex),
      handleTimeTravel: (position) => this.handleTimeTravel(position),
      changeHistory: (title, from, to) => this.changeHistory(title, from, to)
    }
    
    return <StoreContext.Provider value={store} >{children}</StoreContext.Provider>
  }
}

const connect = () => (Component) => (props) => {
  return <StoreContext.Consumer>
    {store => {
      const passedProps = {...props, ...store}
      return <Component {...passedProps} />
    }}
  </StoreContext.Consumer>
}

export { StoreProvider, connect }