import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import * as TaskActions from '../../actions/TaskActions.js';

class TasksCatalog extends React.Component {
  render() {
    const tasks = this.props.tasks;
    let tasklist = Object.keys(tasks).map((key, i) => {
          return (
            <tr key={i}>
              <td>
                <Link to={"contestitem/" + i}>
                  {tasks[key].label}
                </Link>
              </td>
              <td>{tasks[key].shortDescription}</td>
              <td>Прием идей</td>
              <td>
                {tasks[key].tags.map((tag, i) => {
                   if (i === tasks[key].tags.length - 1) {
                      return <span key={i}>{tag}</span>;
                   } else {
                      return <span key={i}>{tag}, </span>;
                   }
                  })
                } 
              </td>
              <td>{tasks[key].price}</td>
            </tr>
          );
        });    
    return (
      <div className={'tasks__catalog ui grid'}>
          <div className={'ui three wide column'}>
          </div>
          <div className={'ui ten wide column'}>
            <table className={'ui blue striped celled compact table'}>
              <thead>
                <tr>
                  <th>Название</th>
                  <th>Описание</th>
                  <th>Статус</th>
                  <th>Теги</th>
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                {tasklist}
              </tbody>
            </table>
          </div>
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
