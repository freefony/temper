import React from 'react'

export default ({title, from, to}) => {
  return <div className="px-6 py-4 flex justify-between bg-white border">
<p className="text-gray-700 text-base">Moved {title} from index {from}  to index {to}</p>
    <span>></span>
  </div>
}