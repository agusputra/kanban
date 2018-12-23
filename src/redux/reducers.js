import _ from 'lodash'
import { combineReducers } from 'redux'
import { ADD_TASK, MOVE_TASK, EDIT_TASK, DELETE_TASK } from './actions'

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
    case (DELETE_TASK): {
      const list = state[action.listId]
      return {
        ...state,
        [list.id]: { ...list, tasks: _.without(list.tasks, action.id) }
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

  let task

  switch (action.type) {
    case (ADD_TASK):
      task = { id: action.id, title: 'New Task' }
      return {
        ...state,
        [action.id]: task
      }
    case (EDIT_TASK):
      task = state[action.id]
      return {
        ...state,
        [action.id]: { ...task, title: action.value }
      }
    case (DELETE_TASK):
      return _.omit(state, action.id)
    default:
      return state
  }
}

export default combineReducers({ lists, tasks })