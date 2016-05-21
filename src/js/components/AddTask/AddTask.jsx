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
        <form onSubmit={this.handleSumbit} className={'ui segment form grid'}>
          <h1 className={'ui block header row'}>
            Add task
          </h1>
          <div className={'eight wide centered column'}>
            <div className={'field'}>
              <label className={'text-center'}>Название</label>
              <input value={this.state.label} type="text" name="label" onChange={this.handleInput} />
            </div>
            <div className={'field'}>
              <label>Короткое описание</label>
              <textarea value={this.state.shortDescription} id="add__task__input" type="text" name="description" onChange={this.handleInput} />
            </div>
            <div className={'field'}>
              <label>Подробный бриф</label>
              <textarea value={this.state.description} type="text" name="description" onChange={this.handleInput} />
            </div>
            <div className={'three wide field'}>
              <label>Цена</label>
              <div className={'ui mini right labeled input'}>
                <input value={this.state.price} type="text" pattern="[0-9]*" name="price" onChange={this.handleInput} />
                <div className={'ui label'}>
                  &#x20bd;
                </div>
              </div>
            </div>
            <div className={'six wide field'}>
              <label>Теги</label>
              <div className={'ui right labeled left icon mini input'}>
                <i className={'tags icon'}></i>
                <input value={this.state.tags} type="text" name="tags" onChange={this.handleInput} />
                <a className={'ui tag label'}>
                  Add Tag
                </a>
              </div>
            </div>
            <button className={'ui button'} type="submit">Добавить задание</button>
          </div>
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
