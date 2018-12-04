import React from 'react';

const TodoForm = props => {
	return (
		<form
			className='form'
			onSubmit={props.addTodo}>
			<input
				id='todoInput'
				name='inputText'
				value={props.inputText}
				onChange={props.handleChange}
				type='text'
				placeholder='what do you have to do today?'
				maxLength='40'
				required
			/>
		</form>
	);
}

export default TodoForm; 