require('./bootstrap');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewTask from './components/NewTask';


ReactDOM.render(<NewTask />, document.getElementById('newtask'));
