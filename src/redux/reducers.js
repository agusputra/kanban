import _ from 'lodash'
import { combineReducers } from 'redux'
import { ADD_TASK } from './actions'

function lists(state, action) {
  if (state === undefined) {
    return {
      backlog: { id: 'backlog', title: 'Backlog', tasks: [] },
      todo: { id: 'todo', title: 'Todo', tasks: [] },
      inProgress: { id: 'inProgress', title: 'In Progress', tasks: [] },
      done: { id: 'done', title: 'Done', tasks: [] }
    }
  }

  switch (action.type) {
    case ('ADD_TASK'): {
      state = {
        ...state,
        backlog: { ...state.backlog, tasks: state.backlog.tasks.concat(action.id) }
      }
      return state
    }
    default:
      return state
  }
}

function tasks(state = [], action) {
  switch (action.type) {
    case (ADD_TASK):
      const task = { id: action.id, title: 'New TASK' }
      state = {
        ...state,
        [action.id]: task
      }
      return state
    default:
      return state
  }
}

export default combineReducers({ lists, tasks })