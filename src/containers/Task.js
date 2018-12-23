import React from 'react'
import { connect } from 'react-redux'
import ContentEditable from 'react-contenteditable';
import { editTask, deleteTask } from '../redux/actions'

class Task extends React.Component {
  handleChange(e) {
    this.props.editTask(this.props.task.id, e.target.value)
  }

  delete() {
    this.props.deleteTask(this.props.list.id, this.props.task.id)
  }

  render() {
    const { task, provided, innerRef } = this.props

    return (
      <div className="card mb-3" ref={innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <div className="card-header text-right">
          <button className="btn btn-danger btn-sm" onClick={e => this.delete(e)}>Delete</button>
        </div>
        <div className="card-body p-0">
          <ContentEditable className="p-3" html={task.title} disabled={false} onChange={(e) => this.handleChange(e)} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  editTask: (id, value) => dispatch(editTask(id, value)),
  deleteTask: (listId, id) => dispatch(deleteTask(listId, id))
})

export default connect(null, mapDispatchToProps)(Task)