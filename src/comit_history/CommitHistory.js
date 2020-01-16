import React, { Component } from 'react'

import History from './History'
import { connect } from '../common/store'

class CommitHistory extends Component {
  render() {
    const { history, handleTimeTravel } = this.props

    
    return <div className="container">
      <div className='text-2xl text-gray-600 text-left max-w-sm shadow-lg bg-white shadow overflow-hidden p-2'>List of actions commited</div>
      <div className="max-w-sm  bg-gray-100 shadow overflow-hidden p-4">
      {history.map((historyObj, i) => 
        <History 
          title={historyObj.title} 
          from={historyObj.from} 
          to={historyObj.to} key={i} 
          position={i}
          onTimeTravel={handleTimeTravel}/> 
      )}
      </div>
    </div>
  }
}

export default connect()(CommitHistory)