import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import List from '../components/List';

function KanbanLists({ lists, tasks }) {
  return (
    <div className="row mt-5">
      {
        lists.map(list => <List key={list.id} list={list} tasks={getTasks(list, tasks)} />)
      }
    </div>
  )
}

function getTasks(list, tasks) {
  return _.map(list.tasks, taskId => tasks[taskId])
}

const mapStateToProps = state => ({
  lists: _.values(state.lists),
  tasks: state.tasks
})

export default connect(
  mapStateToProps
)(KanbanLists)