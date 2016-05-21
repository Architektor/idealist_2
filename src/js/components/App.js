import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';

import HeaderComponent from './base/header/component';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className="page-container">
        <HeaderComponent />
        <div className="body-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
