import React, { Component } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: '',
			loading: true
		};
		this.addTodo = this.addTodo.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.toggleTodo = this.toggleTodo.bind(this);
	}

	async componentWillMount() {
		await this.props.getTodos();
		this.setState({ loading: false });
	}

	async addTodo(event) {
		event.preventDefault();
		await this.props.addTodo(this.state.inputText);
		this.setState({ inputText: '' });
	}

	deleteTodo(id) {
		this.props.removeTodo(id);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	toggleTodo(id, isCompleted) {
		this.props.updateTodo(id, isCompleted);
	}

	render() {
		const todos = this.props.todos.map(todo => (
			<TodoItem
				{...todo}
				key={todo._id}
				deleteTodo={this.deleteTodo}
				toggleTodo={this.toggleTodo}
			/>
		));
		return (
			<main>
				<TodoForm
					inputText={this.state.inputText}
					addTodo={this.addTodo}
					handleChange={this.handleChange}
				/>
				<ul className="list">
					{this.state.loading ? <h2>fetching data from API...</h2> : todos}
				</ul>
			</main>
		);
	}
}

function mapStateToProps(reduxState) {
	return { ...reduxState };
}

export default connect(
	mapStateToProps,
	actions
)(TodoList);
