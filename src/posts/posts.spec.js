import React from 'react'
import PostList from './PostList'
import Post from './Post'
import { connect } from '../common/store'
import { render, cleanup } from '@testing-library/react'

import data from '../../fixtures/posts'

describe('posts components', () => {

  afterEach(cleanup)

  describe('PostList component', () => {
    it('should render component by itself', () => {
      const { container, getByText} = render(<PostList />)
      expect(container).toMatchSnapshot()
      expect(getByText(/Sortable Post List/i)).toBeInTheDocument()
    })

    it('should render when wrapped in connect', () => {
      const PostListComp = connect()(PostList)
      const { container, getByText} = render(<PostListComp />)
      expect(container).toMatchSnapshot()
      expect(getByText(/Sortable Post List/i)).toBeInTheDocument()
    })

    it('should receive data from connect', () => {
      const _MockConnect = (Component) => (props) => {
        const responseData = data.posts.slice(0, 4)
        return <Component {...props} posts={responseData} />
      }

      const WithMockConnect = _MockConnect(PostList)
      const { container } = render(<WithMockConnect />)
      expect(container).toMatchSnapshot()
      expect(container.children[0].childNodes.length).toEqual(5)
    })
  })

  describe('Post', () => {
    it('should render post', () => {
      const { container, getByText } = render(<Post post={data.posts[0]} />)
      expect(container).toMatchSnapshot()
      expect(getByText(/arrow_up/i)).toBeInTheDocument()
      expect(getByText(/arrow_down/i)).toBeInTheDocument()
      expect(getByText(/Post 1/i)).toBeInTheDocument()
    })
    it('should not show arrow down for last element', () => {
      const { container, queryByText } = render(<Post post={data.posts[0]} canMoveDown={false} />)
      expect(container).toMatchSnapshot()
      expect(queryByText(/arrow_up/i)).toBeInTheDocument()
      expect(queryByText(/arrow_down/)).not.toBeInTheDocument()
    })
    it('should not show arrow up for first element', () => {
      const { container, queryByText } = render(<Post post={data.posts[0]} canMoveUp={false} />)
      expect(container).toMatchSnapshot()
      expect(queryByText(/arrow_down/i)).toBeInTheDocument()
      expect(queryByText(/arrow_up/)).not.toBeInTheDocument()
    })
  })
})