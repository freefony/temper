import React from 'react'

import SortArrows from '../common/sort_arrow/SortArrows'

export default ({ post, onChangePosition, canMoveUp, canMoveDown, position }) => {
  return <div className="max-w-sm shadow-lg bg-white shadow rounded overflow-hidden mb-4">
    <div className="px-6 py-2 flex justify-between border">
      <p className="text-gray-700 text-base py-4">{post.title}</p>
      <SortArrows moveAction={onChangePosition} canMoveUp={canMoveUp} canMoveDown={canMoveDown} position={position} />
    </div>
  </div>
}