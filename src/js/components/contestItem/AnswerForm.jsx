import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import * as TaskActions from '../../actions/TaskActions.js';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someSubmitInfo: ''
    };
  }

  handleInput = (e) => {
    const state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleSumbit = (e) => {
    e.preventDefault();
    const _state = this.state;
    _state.tags = _state.tags.split(', ');
    _state.price = parseInt(_state.price);
    this.props.addTask(_state);
    this.setState({
      someSubmitInfo: ''
    })
  }

  render() {
    return (
      <div className={'add__task__page'}>
        <form onSubmit={this.handleSumbit} className={'ui segment form grid'}>
          <h1 className={'ui block header row'}>
            Submit your idea
          </h1>
          <div className={'eight wide centered column'}>
            <div className={'field'}>
              <label className={'text-center'}>Название</label>
              <input value={this.state.someSubmitInfo} type="text" name="someSubmitInfo" onChange={this.handleInput} />
            </div>
            <button className={'ui button'} type="submit">Добавить задание</button>
          </div>
        </form>
        <Link to="taskscatalog">
          Submit your idea
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
)(AnswerForm);