import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFoundView extends Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>404</h1>
        <hr />
        <Link to='/'>Back To Home View</Link>
      </div>
    );
  }
}
