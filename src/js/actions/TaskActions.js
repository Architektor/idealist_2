import * as types from '../constants/ActionTypes';

export function addTask(task) {
  return {
    type: types.ADD_TASK,
    task: task
  };
}
