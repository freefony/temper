import React from 'react'

import {ReactComponent as ArrowUp} from './arrow_up.svg'
import {ReactComponent as ArrowDown} from './arrow_down.svg'

import './sort-arrow.css'

const sortArrows = ({moveAction, canMoveUp = true, canMoveDown = true, position}) => {
  const justify = (canMoveDown && canMoveUp) ? 'justify-between' : 'justify-center'
  return <div className={`flex flex-col ${justify}`}>
    {canMoveUp && <div className='arrow-btn cursor-pointer' onClick={() => moveAction('up', position)}><ArrowUp /></div>}
    {canMoveDown && <div className='arrow-btn cursor-pointer' onClick={() => moveAction('down', position)}><ArrowDown /></div>}
  </div>
}

export default sortArrows