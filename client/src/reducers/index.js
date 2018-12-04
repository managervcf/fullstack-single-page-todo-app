import { GET_TODOS, ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../constants';

const initialState = {
	todos: []
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_TODOS:
			return { ...state, todos: action.data };
		case ADD_TODO:
			return { ...state, todos: [...state.todos, action.name] };
		case REMOVE_TODO:
			var filteredTodos = state.todos.filter(todo => todo._id !== action.id);
			return { ...state, todos: filteredTodos };
		case UPDATE_TODO:
			var updatedTodos = state.todos.map(todo => {
				todo.completed =
					todo._id === action.id ? !todo.completed : todo.completed;
				return todo;
			});
			return { ...state, todos: updatedTodos };
		default:
			return state;
	}
}

export default rootReducer;
