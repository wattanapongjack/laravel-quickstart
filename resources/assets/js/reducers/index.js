import { combineReducers } from 'redux';
import TasksReducer from './reducer_tasks';
import CreateTask from './reducer_create_tasks';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  tasks : TasksReducer,
  createtasks : CreateTask,
  form : formReducer
});

export default rootReducer;
