import React, { Component } from 'react';

import TaskAdd from '../containers/task-add';
import TaskCurrent from '../containers/task-current';

export default class App extends Component {
  render() {
    return (
      <div>
        <TaskAdd />
        <TaskCurrent />
      </div>
    );
  }
}
