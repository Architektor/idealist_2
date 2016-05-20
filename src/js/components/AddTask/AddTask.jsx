import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as TaskActions from '../../actions/TaskActions.js';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      description: '',
      price: null,
      image: '',
      tags: []
    };
  }
  handleInput = (e) => {
    switch (e.target.name) {
      case 'label':
        this.setState({
          label: e.target.value
        });
        break;
      case 'description':
        this.setState({
          description: e.target.value
        });
        break;
      case 'price':
        this.setState({
          price: e.target.value
        });
        break;
      case 'image':
        this.setState({
          image: e.target.value
        });
        break;
      case 'tags':
        this.setState({
          tags: e.target.value
        });
        break;
    }
  }
  handleSumbit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
  }
  render() {
    return (
      <div className={'add__task__page'}>
        <h1 className={'page__header'}>
          Add task
        </h1>
        <form onSubmit={this.handleSumbit} action="#">
          <input id="add__task__input" type="text" name="label" onChange={this.handleInput} />
          <input id="add__task__input" type="text" name="description" onChange={this.handleInput} />
          <input id="add__task__input" type="text" pattern="[0-9]*" name="price" onChange={this.handleInput} />
          <input id="add__task__image__input" type="text" name="image" onChange={this.handleInput} />
          <input id="add__task__input" type="text" name="tags" onChange={this.handleInput} />
          <input type="submit"/>
        </form>
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
