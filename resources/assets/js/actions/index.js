export function clickAdd(text){
    return{
      type: 'TASK_ADDED',
      text,
    };
}

export function deleteTask(id){
  return{
    type: 'TASK_DELETE',
    id
  }
}