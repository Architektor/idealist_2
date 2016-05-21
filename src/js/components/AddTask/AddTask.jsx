import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import * as TaskActions from '../../actions/TaskActions.js';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      description: '',
      price: '',
      image: '',
      tags: ''
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
      label: '',
      description: '',
      price: '',
      image: '',
      tags: ''
    })
  }

  render() {
    return (
      <div className={'add__task__page'}>
        <h1 className={'page__header'}>
          Add task
        </h1>
        <form onSubmit={this.handleSumbit} action="#">
          <input id="add__task__input" value={this.state.label} type="text" name="label" onChange={this.handleInput} />
          <input id="add__task__input" value={this.state.description} type="text" name="description" onChange={this.handleInput} />
          <input id="add__task__input" value={this.state.price} type="text" pattern="[0-9]*" name="price" onChange={this.handleInput} />
          <input id="add__task__image__input" value={this.state.image} type="text" name="image" onChange={this.handleInput} />
          <input id="add__task__input" value={this.state.tags} type="text" name="tags" onChange={this.handleInput} />
          <input type="submit"/>
        </form>
        <Link to="taskscatalog">
          linkk
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    store: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TaskActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTask);
