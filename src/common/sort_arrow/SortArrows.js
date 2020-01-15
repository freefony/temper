import React from 'react'

import {ReactComponent as ArrowUp} from './arrow_up.svg'
import {ReactComponent as ArrowDown} from './arrow_down.svg'

const sortArrows = ({canMoveUp = true, canMoveDown = true}) => {
  const justify = (canMoveDown && canMoveUp) ? 'justify-between' : 'justify-center'
  return <div className={`flex flex-col ${justify}`}>
    {canMoveUp && <div><ArrowUp /></div>}
    {canMoveDown && <div><ArrowDown /></div>}
  </div>
}

export default sortArrows