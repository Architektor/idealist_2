import React from 'react';

export default class TaskPage extends React.Component {
  render() {
    return (
      <div className={'task__page__wrapper'}>
        <h1>This is page for task number {this.props.params.taskId}</h1>   
      </div>
    );
  }
}
