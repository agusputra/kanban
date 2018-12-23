export const ADD_TASK = 'ADD_TASK'
export const MOVE_TASK = 'MOVE_TASK'

export function addTask(id) {
  return { type: ADD_TASK, id }
}

export function moveTask(fromListId, toListId, id) {
  return { type: MOVE_TASK, fromListId, toListId, id }
}