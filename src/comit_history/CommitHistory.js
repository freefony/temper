import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import History from './History'
import { connect } from '../common/store'

const CommitHistory = ({ history, handleTimeTravel }) => {
  const itemsList = history.map((historyObj, i) => {
    return (
      <CSSTransition key={i} timeout={500} classNames="move">
        <History
            title={historyObj.title} 
            from={historyObj.from} 
            to={historyObj.to} key={i} 
            position={i}
            onTimeTravel={(position) => handleTimeTravel(position )}/>
      </CSSTransition>
    );

  }).reverse()
    
  return <div className="container">
    <div className='text-2xl text-gray-600 text-left max-w-sm shadow-xl bg-white shadow overflow-hidden p-2 flex-1'>List of actions commited</div>
    <div className="max-w-sm  bg-gray-100 shadow-lg overflow-hidden p-4">
      <TransitionGroup>
        {itemsList}
      </TransitionGroup>
    </div>
  </div>
}

export default connect()(CommitHistory)