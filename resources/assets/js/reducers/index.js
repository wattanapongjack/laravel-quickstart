import { combineReducers } from 'redux';
import TasksReducer from './reducer_tasks';
import NewTaskRe from './reducer_new_task';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  tasks : TasksReducer,
  reacttasks: NewTaskRe,
  form : formReducer
});

export default rootReducer;
