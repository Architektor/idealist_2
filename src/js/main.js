import '../styles/bootstrap.min.css';
import '../styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';
import { Router, browserHistory, Link } from 'react-router';

import routes from './routes';

const store = configureStore();
const rootElement = document.getElementById('app');


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  rootElement
);
