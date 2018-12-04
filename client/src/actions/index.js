import { GET_TODOS, ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../constants';

const baseURL = '/api/todos';

function handleTodos(data) {
	return {
		type: GET_TODOS,
		data
	};
}

function handleAdd(name) {
	return {
		type: ADD_TODO,
		name
	};
}

function handleRemove(id) {
	return {
		type: REMOVE_TODO,
		id
	};
}

function handleUpdate(id, isCompleted) {
	return {
		type: UPDATE_TODO,
		completed: !isCompleted,
		id
	};
}

export const getTodos = () => async dispatch => {
	const res = await fetch(baseURL);
	const data = await res.json();
	dispatch(handleTodos(data));
};

export function addTodo(name) {
	return dispatch => {
		return fetch(baseURL, {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify({ name })
		})
			.then(res => res.json())
			.then(data => dispatch(handleAdd(data)))
			.catch(err => console.log('ERROR!!!!!!!', err));
	};
}

export const removeTodo = id => async dispatch => {
	const res = await fetch(`${baseURL}/${id}`, {
		method: 'DELETE'
	});
	const data = await res.json();
	dispatch(handleRemove(id));
};

export const updateTodo = (id, isCompleted) => async dispatch => {
	const res = await fetch(`${baseURL}/${id}`, {
		method: 'PUT',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: JSON.stringify({ completed: !isCompleted })
	});
	const data = await res.json();
	dispatch(handleUpdate(id, isCompleted));
};
