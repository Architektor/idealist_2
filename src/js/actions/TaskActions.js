import * as types from '../constants/ActionTypes';

export function addTask(task) {
  return {
    type: types.ADD_TASK,
    task: task
  };
}

export function submitIdea(idea, contestId) {
  return {
    type: types.SUBMIT_IDEA,
    contestId: contestId,
    idea: idea
  };
}
