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

export function getTodos() {
	return dispatch => {
		return fetch(baseURL)
			.then(res => res.json())
			.then(data => dispatch(handleTodos(data)))
			.catch(err => console.log('ERROR!!!!!!!', err));
	};
}

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

export function removeTodo(id) {
	return dispatch => {
		return fetch(`${baseURL}/${id}`, {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then(data => dispatch(handleRemove(id)))
			.catch(err => console.log('ERROR!!!!!!!', err));
	};
}

export function updateTodo(id, isCompleted) {
	return dispatch => {
		return fetch(`${baseURL}/${id}`, {
			method: 'PUT',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify({ completed: !isCompleted })
		})
			.then(res => res.json())
			.then(data => dispatch(handleUpdate(id, isCompleted)))
			.catch(err => console.log('ERROR:', err));
	};
}
