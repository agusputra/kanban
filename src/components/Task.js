import React from 'react'

export default class Task extends React.Component {
  render() {
    const { task, provided, innerRef } = this.props

    return (
      <div className="card mb-3" ref={innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <div className="card-body">
          {task.id}
        </div>
      </div>
    )
  }
}