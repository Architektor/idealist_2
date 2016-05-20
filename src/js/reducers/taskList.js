/**
 * Another clever approach of writing reducers:
 *
 * export default function(state = initialState, action) {
 *   const actions = {
 *      [ACTION_TYPE]: () => [action.payload.data, ...state]
 *   };
 *
 *   return (_.isFunction(actions[action.type])) ? actions[action.type]() : state
 * }
 */

import * as types from '../constants/ActionTypes';
import { assign } from 'lodash';

const initialState = {
  tasks: [],
  tasksById: [
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_TASK: {
      const len = state.tasks.length ? state.tasks.length : 1;
      const newId = (state.tasks[len - 1] + 1) || 0;
      return {
        ...state,
        tasks: state.tasks.concat(newId),
        tasksById: [
          ...state.tasksById,
          {
            id: newId,
            task: action.task
          }
        ]
      };
    }
    default:
      return state;
  }
}
