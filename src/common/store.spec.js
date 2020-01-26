import React from 'react'
import { StoreProvider, connect } from './store'
import { render, wait, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import posts from '../../fixtures/posts.json'

import PostList from '../posts/PostList'
import CommitHistory from '../comit_history/CommitHistory'

describe('store', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    const mockAPIResponse = {
      json: () => Promise.resolve(posts.posts)
    }
    jest.spyOn(global, 'fetch').mockImplementation(() => mockAPIResponse)
  })
  describe('StoreProvider', () => {
    it('should load posts after component is mounted', async () => {
      const tree = (
        <StoreProvider>
          <PostList />
        </StoreProvider>
      )
      render(tree)
      expect(global.fetch).toHaveBeenCalled()
    })
    it('should only render 5 posts', async () => {
      const tree = (
        <StoreProvider>
          <PostList />
        </StoreProvider>
      )
      const { queryAllByText, queryByText } = render(tree)
      await wait(() => queryAllByText(/Post [1-5]/i))
      expect(queryAllByText(/Post [1-5]/i).length).toEqual(5)
      expect(queryByText('Post 7')).toBeNull()
    })

    it('should start 0 history', async () => {
      const tree = (
        <StoreProvider>
          <PostList />
          <CommitHistory />
        </StoreProvider>
      )
      const { queryAllByText } = render(tree)
      await wait(() => queryAllByText(/Post [1-5]/i))
      expect(queryAllByText(/Moved Post [1-5] from index/i).length).toEqual(0)
    })

    it('should add history when an arrow btn is clicked', async () => {
      const tree = (
        <StoreProvider>
          <PostList />
          <CommitHistory />
        </StoreProvider>
      )
      const { queryAllByText, getByTitle, getByText } = render(tree)
      expect(queryAllByText(/Moved Post [1-5] from index/i).length).toEqual(0)
      jest.setTimeout(30000)
      await wait(() => getByTitle('arrow-up-3'))
      fireEvent(
        getByTitle('arrow-up-3'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      )
      expect(queryAllByText(/Moved Post [1-5] from index/i).length).toEqual(1)
      expect(getByText(/Moved Post 4 from index 3 to index 2/i)).toBeInTheDocument()
    })
  })
})