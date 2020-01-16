import React from 'react'

export const TimeTravelBtn = ({position, timeTravelAction}) => {
  return <button 
    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded"
    onClick={() => timeTravelAction(position)}>
    Time travel
  </button>
}