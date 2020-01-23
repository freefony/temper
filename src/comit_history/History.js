import React from 'react'

import { TimeTravelBtn } from './TimeTravelBtn'

export default ({title, from, to, position, onTimeTravel}) => {
  return <div 
    className={`px-2 py-4 flex flex-no-wrap justify-between bg-white border text-sm`}
    >
      <p className="text-gray-700 text-left">Moved {title} from index {from}  to index {to}</p>
      <div className='flex-none'><TimeTravelBtn position={position} timeTravelAction={onTimeTravel} /></div>
  </div>
}