import _ from 'lodash'
import { combineReducers } from 'redux'
import { ADD_TASK, MOVE_TASK } from './actions'

function lists(state, action) {
  if (state === undefined) {
    return {
      backlog: { id: 'backlog', title: 'Backlog', tasks: [1, 2] },
      todo: { id: 'todo', title: 'Todo', tasks: [3, 4] },
      inProgress: { id: 'inProgress', title: 'In Progress', tasks: [] },
      done: { id: 'done', title: 'Done', tasks: [] }
    }
  }

  switch (action.type) {
    case (ADD_TASK): {
      return {
        ...state,
        backlog: { ...state.backlog, tasks: state.backlog.tasks.concat(action.id) }
      }
    }
    case (MOVE_TASK): {
      const from = state[action.fromListId]
      const to = state[action.toListId]
      return {
        ...state,
        [from.id]: { ...from, tasks: _.without(from.tasks, action.id) },
        [to.id]: { ...to, tasks: to.tasks.concat(action.id) }
      }
    }
    default:
      return state
  }
}

function tasks(state, action) {
  if (state === undefined) {
    return {
      1: { id: 1, title: 'Task 1' },
      2: { id: 2, title: 'Task 2' },
      3: { id: 3, title: 'Task 3' },
      4: { id: 4, title: 'Task 4' }
    }
  }

  switch (action.type) {
    case (ADD_TASK):
      const task = { id: action.id, title: 'New TASK' }
      return {
        ...state,
        [action.id]: task
      }
    default:
      return state
  }
}

export default combineReducers({ lists, tasks })