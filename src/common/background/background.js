import React from 'react'

import './background.css'

export const Background = () => {
  return <svg className='bg-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
    <polygon fill="white" points="0,100 100,0 100,100"/>
  </svg>
}