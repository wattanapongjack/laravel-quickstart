require('./bootstrap');

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import NewTask from './components/NewTask';
import CurrentTask from './components/CurrentTask';

class App extends Component {

    render() {
        return ( 
            <NewTask />
        );
    }
}

ReactDom.render( <App /> , document.getElementById('root'));