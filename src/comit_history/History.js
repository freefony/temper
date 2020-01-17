import React, { useState } from 'react'

import { TimeTravelBtn } from './TimeTravelBtn'

export default ({title, from, to, position, onTimeTravel}) => {
  const [animation, setAnimation] = useState('slideInLeft')
  const toggleState = (position) => {
    const slideWay = (animation === 'slideInLeft') ? 'slideOutRight': 'slideInLeft'
    setAnimation(slideWay)
    setTimeout(() => onTimeTravel(position), 1000)
  }
  console.log(animation)
  return <div className={`px-2 py-4 flex flex-no-wrap justify-between bg-white border text-sm animated ${animation} fast`}>
<p className="text-gray-700 text-left">Moved {title} from index {from}  to index {to}</p>
    <span><TimeTravelBtn position={position} timeTravelAction={toggleState} /></span>
  </div>
}