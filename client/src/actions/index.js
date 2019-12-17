// Import constants
import { GET_TODOS, ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../constants';

// Set base url to local api
const baseURL = '/api/todos';

// Define all redux actions using native fetch
const handleTodos = data => ({
  type: GET_TODOS,
  data
});

const handleAdd = name => ({
  type: ADD_TODO,
  name
});

const handleRemove = id => ({
  type: REMOVE_TODO,
  id
});

const handleUpdate = (id, isCompleted) => ({
  type: UPDATE_TODO,
  completed: !isCompleted,
  id
});

export const getTodos = () => async dispatch => {
  const response = await fetch(baseURL);
  const data = await response.json();
  dispatch(handleTodos(data));
};

export const addTodo = name => async dispatch => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ name })
  });
  const data = await response.json();
  dispatch(handleAdd(data));
};

export const removeTodo = id => async dispatch => {
  await fetch(`${baseURL}/${id}`, { method: 'DELETE' });
  dispatch(handleRemove(id));
};

export const updateTodo = (id, isCompleted) => async dispatch => {
  await fetch(`${baseURL}/${id}`, {
    method: 'PUT',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ completed: !isCompleted })
  });
  dispatch(handleUpdate(id, isCompleted));
};
