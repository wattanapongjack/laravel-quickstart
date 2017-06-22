import { CREATE_TASK } from '../actions';
import { DELETE_TASKS } from '../actions';

// const initialState = [
//   {
//     text: 'Redux',
//     id: 0
//   }
// ]

export default function(state = [], action) {
  switch (action.type) {
    case CREATE_TASK :
      return [
        {
          id: state.reduce((maxId, createtask) => Math.max(createtask.id, maxId), -1) + 1,
          text: action.payload.name,
        },
        ...state
      ]

      case DELETE_TASKS :
      return state.filter(createtask =>
        createtask.id !== action.id
      )

    default:
      return state
  }
}