import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import IndexPage from './components/IndexPage/IndexPage.jsx';
import TaskPage from './components/TaskPage/TaskPage.jsx';
import AddTask from './components/AddTask/AddTask.jsx';
import TasksCatalog from './components/TasksCatalog/component.jsx';
import ContestItem from './components/contestItem/component.jsx';
import IkeaContest from './components/IkeaContest/component.jsx';
import NotFoundView from './components/base/404/component.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage} />
    <Route path="task/:taskId" component={TaskPage} />
    <Route path="addtask" component={AddTask} />
    <Route path="404" component={NotFoundView} />
    <Route path="taskscatalog" component={TasksCatalog} />
    <Route path="contestitem/:id" component={ContestItem} />
    <Route path="ikea" component={IkeaContest} />
    <Redirect from="*" to="404" />
  </Route>
);
