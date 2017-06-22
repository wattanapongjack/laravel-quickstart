import { CREATE_TASK } from '../actions';
import { DELETE_TASKS } from '../actions';

// const initialState = [
//     {
//         text: "",
//         id: Math.random()
//     }
// ]

export default function(state = [], action) {
    switch (action.type) {
    case CREATE_TASK :
      return [
        {
          id: action.payload.data.tasks.id,
          text: action.payload.data.tasks.name,
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