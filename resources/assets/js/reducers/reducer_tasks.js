import _ from 'lodash';
import { GET_TASKS } from '../actions';
import { CREATE_TASK } from '../actions';
import { DELETE_TASKS } from '../actions';

export default function(state = [], action) {
  switch (action.type) {

    case GET_TASKS :
      return _.mapKeys(action.payload.data.tasks, 'id');

    default:
      return state
  }
}