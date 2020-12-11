import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.createTodo = this.createTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  //   Render tasks in render method
  renderTasks() {
    return this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        remove={this.removeTodo}
        update={this.updateTodo}
        toggle={this.toggleCompletion}
      />
    ));
  }
  //   Remove Todo
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  }
  //   Create New Todo
  createTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  //   Update Todo
  updateTodo(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  //   Toggle completion
  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    return (
      <div className="TodoList">
        <h1>
          Todo List!<span> A Simple React Todo List App</span>
        </h1>
        <ul>{this.renderTasks()}</ul>
        <NewTodoForm create={this.createTodo} />
      </div>
    );
  }
}

export default TodoList;
