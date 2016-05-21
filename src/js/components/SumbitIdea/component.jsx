import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import * as TaskActions from '../../actions/TaskActions.js';

class SubmitIdea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: ''
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
    this.props.submitIdea(_state, this.props.id);
    this.setState({
      idea: ''
    });
  }
  render() {
    return (
      <div className={'submit__idea__page'}>
        <form onSubmit={this.handleSumbit} action="#" className={'ui segment form grid'}>
          <div className={'eight wide centered column'}>
            <div className={'field'}>
              <label>Идея</label>
              <textarea id="add__task__input" type="text" name="idea" onChange={this.handleInput} />
            </div>
            <button className={'ui green button'} type="submit">Предложить идею</button>
          </div>
        </form>
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
)(SubmitIdea);
