import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TodoList from './TodoList';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<TodoList />
				<Footer />
			</div>
		);
	}
}

export default App;
