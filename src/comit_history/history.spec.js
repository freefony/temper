import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import CommitHistory from './CommitHistory'
import History from './History'

import data from '../../fixtures/history'

describe('History', () => {
  afterEach(cleanup)
  describe('CommitHistory', () => {
    it('should render component', () => {
      const { container } = render(<CommitHistory />)
      expect(container).toMatchSnapshot()
    })
    it('should display history cards with correct text', () => {
      const { container, getByText } = render(<CommitHistory history={data.history} />)
      expect(container).toMatchSnapshot()
      expect(getByText(/moved Post 1 from index 0 to index 1/i)).toBeInTheDocument()
      expect(getByText(/moved Post 1 from index 1 to index 2/i)).toBeInTheDocument()
      expect(getByText(/moved Post 2 from index 4 to index 3/i)).toBeInTheDocument()
      expect(getByText(/moved Post 3 from index 1 to index 0/i)).toBeInTheDocument()
    })
  })
  describe('History', () => {
    const mockTimeTravelFnc = jest.fn(() => 1)
    it('should display text and time travel btn', () => {
      const { container, getByText } = render(<History {...data.history[0]} position={0} onTimeTravel={mockTimeTravelFnc} />)
      expect(container).toMatchSnapshot()
      expect(getByText(/moved Post 1 from index 0 to index 1/i)).toBeInTheDocument()
      
    })
    it('should contain a clickable btn that calls the timeTravelAction fnc props when clicked', () => {
      const { container, queryByText } = render(<History 
          {...data.history[0]} 
          position={0} 
          onTimeTravel={mockTimeTravelFnc} />)
      expect(container).toMatchSnapshot()
      expect(queryByText('Time travel')).toBeInTheDocument()
      fireEvent(
        queryByText('Time travel'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      )
      expect(mockTimeTravelFnc).toHaveBeenCalledWith(0)
    })
  })
})