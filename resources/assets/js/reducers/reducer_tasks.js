import _ from 'lodash';
import { GET_TASKS } from '../actions';
import { CREATE_TASK } from '../actions';
import { DELETE_TASKS } from '../actions';

export default function(state = [], action) {
  switch (action.type) {

    case GET_TASKS :
      return _.mapKeys(action.payload.data.tasks, 'id');

    // case CREATE_TASK :
    //   return [
    //     {
    //       id: state.reduce((maxId, task) => Math.max(task.id, maxId), -1) + 1,
    //       name: action.values.name,
    //     },
    //     ...state
    //   ]

    // case DELETE_TASKS :
    //   return state.filter(task =>
    //     task.id !== action.id
    //   )

    default:
      return state
  }
}