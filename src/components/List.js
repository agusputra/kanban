import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import AddTask from '../containers/AddTask'
import Task from '../containers/Task'

export default class List extends React.Component {
  render() {
    return (
      <div className="col-3 mb-5" ref={this.props.innerRef}>
        <div className="card">
          <div className="card-header">
            {this.props.list.title}
          </div>
          <div className="card-body">
            {
              this.props.tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {
                    (provided, snapshot) => (
                      <Task list={this.props.list} task={task} innerRef={provided.innerRef} provided={provided} />
                    )
                  }
                </Draggable>
              ))
            }
            {
              this.props.provided.placeholder
            }
            {
              this.props.list.id === 'backlog' && <AddTask />
            }
          </div>
        </div>
      </div>
    )
  }
}