import  axios from 'axios';

export const CREATE_TASK = 'create_tasks';
export const GET_TASKS = 'get_tasks';
export const DELETE_TASKS = 'delete_tasks';

const API_URL = '/api';
const API_TOKEN = '?api_token='+window.Laravel.apiToken;
// const API_HEADERS = {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json',
//   'X-CSRF-TOKEN': window.Laravel.csrfToken,
//   'Authorization': 'Bearer ' + window.Laravel.apiToken
// };

export function getTasks(){
  const request = axios.get(`${API_URL}/tasks${API_TOKEN}`);

  return {
    type: GET_TASKS ,
    payload: request
  };
}

export function createTask(values){
  const request = axios.post(`${API_URL}/task${API_TOKEN}`, values)
    .then(function(response){
      console.log(response.json)
      // return response.json();
    });

  return {
    type: CREATE_TASK ,
    payload: values
  };
}

export function delTask(id){
  const request = axios.delete(`${API_URL}/task/${id}${API_TOKEN}`);

  return{
    type: DELETE_TASKS,
    id
  };
}

// export function clickAdd(text){
//     return{
//       type: 'TASK_ADDED',
//       text,
//     };
// }

// export function deleteTask(id){
//   return{
//     type: 'TASK_DELETE',
//     id
//   };
// }