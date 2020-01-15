import React from 'react'

export default ({ post }) => {
  return <div className="max-w-sm shadow-lg bg-white shadow rounded overflow-hidden mb-4">
      <div className="px-6 py-6 flex justify-between border">
        <p className="text-gray-700 text-base">{post.title}</p>
        <span>></span>
      </div>
  </div>
}