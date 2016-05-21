import * as types from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
  tasks: {
    0: {
      label: 'Логотип',
      shortDescription: 'Нужен минималистичный логотип для iOS приложения',
      description: 'Нужен минималистичный логотип для iOS приложения. Тыр пыр лорем ипсум.',
      price: '11420',
      tags: ['logo', 'iOS', 'mobile'],
      ideas: []
    },
    1: {
      label: 'Идея для ролика',
      shortDescription: 'Идея для вирусного видео',
      description: 'Лорем ипсум хуипсум алохамора',
      price: '32100',
      tags: ['youtube', 'virus-video'],
      ideas: []
    },
    2: {
      label: 'Как назвать стартап',
      shortDescription: 'Cтарап про убийцу тиндера',
      description: 'хуй пизда орешки',
      price: '99999',
      tags: ['startup','naming','tinder'],
      ideas: []
    }
  },
  ideas: {
    
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_TASK: {
      let _task = action.task;
      _task.ideas = [];
      let _tasks = state.tasks;
      _tasks[Object.keys(_tasks).length] = action.task;
      return objectAssign({}, state, {tasks: _tasks});
    }
    case types.SUBMIT_IDEA: {
      let _tasks = state.tasks;
      _tasks[action.contestId].ideas[_tasks[action.contestId].ideas.length + 1] = action.idea;
      return objectAssign({}, state, {tasks: _tasks});
    }
    default:
      return state;
  }
}
