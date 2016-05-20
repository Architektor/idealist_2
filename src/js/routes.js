import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import IdealistApp from './containers/IdealistApp/IdealistApp.js';
import TaskPage from './components/TaskPage/TaskPage.jsx';
import AddTask from './components/AddTask/AddTask.jsx';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IdealistApp} />
    <Route path="task/:taskId" component={TaskPage} />
    <Route path="addtask" component={AddTask} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
