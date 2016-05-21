import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import * as TaskActions from '../../actions/TaskActions.js';

class TasksCatalog extends React.Component {
  render() {
    const tasks = this.props.tasks;

    return (
      <div>
      	{Object.keys(tasks).map((task, key) => {
          return (
            <div key={key}>
              <h2>label: {tasks[task].label}</h2>
              <h2>description: {tasks[task].description}</h2>
              <h2>price: {tasks[task].price}</h2>
              <h2>tags:</h2>
              <ul>
                {tasks[task].tags.map((tag, key) =>
                  <li key={key}>{tag}</li>
                )}
              </ul>
              <Link to={"contestitem/" + task}>
                <h1>More info</h1>
              </Link>
            </div>
          )
        })}    
        <Link to="addtask">
          linkk
        </Link>
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
)(TasksCatalog);