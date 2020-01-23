import React from 'react'

export const TimeTravelBtn = ({position, timeTravelAction}) => {
  return <button 
    className="bg-green-300 hover:bg-green-200 text-gray-700 font-bold py-2 px-2 rounded"
    onClick={() => timeTravelAction(position)}>
    Time travel
  </button>
}