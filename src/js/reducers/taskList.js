import * as types from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
  tasks: {
    0: {
      label: 'Нейминг',
      shortDescription: 'Нужен креатив для нейминга iOS приложения',
      description: 'Нужен минималистичный логотип для iOS приложения. Тыр пыр лорем ипсум.',
      price: '20000',
      tags: ['logo', 'iOS', 'mobile'],
      ideas: []
    },
    1: {
      label: 'Идея для ролика',
      shortDescription: 'Идея для вирусного видео',
      description: '',
      price: '32000',
      tags: ['youtube', 'virus-video'],
      ideas: []
    },
    2: {
      label: 'Как назвать стартап',
      shortDescription: 'Cтарап - убийца тиндера',
      description: '',
      price: '16000',
      tags: ['startup','naming','tinder'],
      ideas: []
    },
    3: {
      label: 'Синопсис сериала',
      shortDescription: 'Заявка для сериала на канале "Дачный"',
      description: '',
      price: '50000',
      tags: ['tv series','synopsis'],
      ideas: []
    },
    4: {
      label: 'Слоган для компании',
      shortDescription: 'Компания распространяет спортивные товары',
      description: '',
      price: '10000',
      tags: ['tv series','synopsis'],
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
