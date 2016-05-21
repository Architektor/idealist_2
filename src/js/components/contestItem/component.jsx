import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import * as TaskActions from '../../actions/TaskActions.js';

class ContestItem extends React.Component {
  render() {
    const task = this.props.tasks[this.props.routeParams.id];
    console.log(task);
    return (
      <div>
        <h1>
          {task.label}
        </h1>
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
