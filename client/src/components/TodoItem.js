import React from 'react';

const TodoItem = props => {
	const done = props.completed ? 'done' : null;
	return (
		<li className='task'>
			<i
				className="far fa-trash-alt"
				onClick={() => props.deleteTodo(props._id)} />
			<span
				className={done}
				onClick={() => props.toggleTodo(props._id, props.completed)}>
				{props.name}
			</span>
		</li>
	);
}

export default TodoItem;