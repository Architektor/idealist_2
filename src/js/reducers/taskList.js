import * as types from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
  tasks: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_TASK: {
      let _tasks = objectAssign({}, state.tasks);
      _tasks[Object.keys(_tasks).length] = action.task;
      return objectAssign({}, state, {tasks: _tasks});
    }
    default:
      return state;
  }
}
