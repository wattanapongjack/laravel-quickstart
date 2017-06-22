require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import App from './components/app'
import TaskHome from './containers/task-home'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/tasks" component={App} />
        <Route path="/home" component={TaskHome} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('newTask'));
