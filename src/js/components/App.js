import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className="page-container">
        {this.props.children}
        <div className={'links'}>
          <Link to="/">home  |  </Link>
          <Link to="/addtask">addtask  |  </Link>
          <Link to="/taskscatalog">taskscatalog</Link>
        </div>
      </div>
    );
  }
}
