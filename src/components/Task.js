import React from 'react'

export default function Task({ task }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        {task.id}
      </div>
    </div>
  )
}