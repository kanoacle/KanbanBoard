/*jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import kanbanReducers from './Reducers';
import App from './Containers/App';
import './css/styles.css';

const reactContainer = document.getElementById('kanban');

const store = createStore(kanbanReducers);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  reactContainer
);