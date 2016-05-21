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
        <form onSubmit={this.handleSumbit} action="#" className={'ui segment form grid'}>
          <h1 className={'ui block header row'}>
            Add task
          </h1>
          <div className={'eight wide centered column'}>
            <div className={'field'}>
              <label className={'text-center'}>Название</label>
              <input id="add__task__input" type="text" name="label" onChange={this.handleInput} />
            </div>
            <div className={'field'}>
              <label>Подробный бриф</label>
              <textarea id="add__task__input" type="text" name="description" onChange={this.handleInput} />
            </div>
            <div className={'three wide field'}>
              <label>Цена</label>
              <div className={'ui mini right labeled input'}>
                <input id="add__task__input" type="text" pattern="[0-9]*" name="price" onChange={this.handleInput} />
                <div className={'ui label'}>
                  &#x20bd;
                </div>
              </div>
            </div>
            <div className={'six wide field'}>
              <label>Теги</label>
              <div className={'ui right labeled left icon mini input'}>
                <i className={'tags icon'}></i>
                <input id="add__task__input" type="text" name="tags" onChange={this.handleInput} />
                <a className={'ui tag label'}>
                  Add Tag
                </a>
              </div>
            </div>
            <button className={'ui button'} type="submit">Добавить задание</button>
          </div>
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
