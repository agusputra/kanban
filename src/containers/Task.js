import React from 'react'
import { connect } from 'react-redux'
import ContentEditable from 'react-contenteditable';
import { editTask } from '../redux/actions'

class Task extends React.Component {
  handleChange(e) {
    this.props.editTask(this.props.task.id, e.target.value)
  }

  render() {
    const { task, provided, innerRef } = this.props

    return (
      <div className="card mb-3" ref={innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <div className="card-header text-right">
          <button className="btn btn-danger btn-sm">Delete</button>
        </div>
        <div className="card-body p-0">
          <ContentEditable className="p-3" html={task.title} disabled={false} onChange={(e) => this.handleChange(e)} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  editTask: (id, value) => dispatch(editTask(id, value))
})

export default connect(null, mapDispatchToProps)(Task)