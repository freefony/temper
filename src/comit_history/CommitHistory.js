import React, { Component } from 'react'

class CommitHistory extends Component {
  render() {
    return <div className="container">
      <div className='text-2xl text-gray-600 text-left max-w-sm shadow-lg bg-white shadow overflow-hidden p-2'>List of actions commited</div>
      <div className="max-w-sm  bg-gray-100 shadow overflow-hidden p-4">
        <div className="px-6 py-4 flex justify-between bg-white border">
          <p className="text-gray-700 text-base">History</p>
          <span>></span>
        </div>
      </div>
    </div>
  }
}

export default CommitHistory