const initialState = [
  {
    text: 'Redux',
    id: 0
  }
]

export default function(state = initialState, action) {
  switch (action.type) {
    case 'TASK_ADDED':
      return [
        {
          id: state.reduce((maxId, task) => Math.max(task.id, maxId), -1) + 1,
          text: action.text,
        },
        ...state
      ]

      case 'TASK_DELETE':
      return state.filter(task =>
        task.id !== action.id
      )

    default:
      return state
  }
}