import React, { Component } from "react";

class Todo extends Component {
	state = {
		todos: [
			{ id: 1, content: "exercise" },
			{ id: 2, content: "eating" },
			{ id: 3, content: "reading" },
			{ id: 4, content: "playing" },
			{ id: 5, content: "sleeping" }
		],
		content: ''
	};
	handleInput = e => {
		//[e.target.name] = e.target.value;
        this.setState({
            content: e.target.value
        })
    };
	deleteTodo = id => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id;
		});
		this.setState({
			todos
		});
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
		this.addTodo(this.state)
		this.setState({
            content: ''
        })
    }    
    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos
        })
	}
	render() {
		return (
			<div>
				<h2>Todo App</h2>
                <form onSubmit = {this.handleSubmit}>
				    <input
                        type="text"
                        name="todo"
                        value={this.state.content}
						onChange={this.handleInput}
						required
                    />
				    <button>AddTodo</button>
                </form>
				<ol>
					{this.state.todos.map(todo => (
						<li key={todo.id} onClick={() => this.deleteTodo(todo.id)}>
							{todo.content}
						</li>
					))}
				</ol>
			</div>
		);
	}
}

export default Todo;
