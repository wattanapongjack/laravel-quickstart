import { combineReducers } from 'redux';
import TasksReducer from './reducer_tasks';
import NewTaskReact from './reducer_new_task';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  tasks : TasksReducer,
  reacttasks: NewTaskReact,
  form : formReducer
});

export default rootReducer;
