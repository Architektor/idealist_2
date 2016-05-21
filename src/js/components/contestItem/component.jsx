import React from 'react';
import SubmitIdea from '../SumbitIdea/component.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import * as TaskActions from '../../actions/TaskActions.js';
import AnswerForm from './AnswerForm';

class ContestItem extends React.Component {
  render() {
    const task = this.props.tasks[this.props.routeParams.id];
    return (
      <div>
        <h1>
          {task.label}
        </h1>
        <p>
          {task.description}
        </p>
        <p>
         Цена {task.price}
        </p>
        <p>
         Уже предложили {task.ideas.length} идей!
        </p>
        <SubmitIdea id={this.props.routeParams.id}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.taskList.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TaskActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContestItem);
