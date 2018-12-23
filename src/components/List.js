import React from 'react'
import AddTask from '../containers/AddTask'
import Task from '../components/Task'

export default class List extends React.Component {
  render() {
    return (
      <div className="col-3">
        <div className="card">
          <div className="card-header">
            {this.props.list.title}
          </div>
          <div className="card-body">
            {
              this.props.tasks.map(task => <Task task={task} />)
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