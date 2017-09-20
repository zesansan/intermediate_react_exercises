import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "awlekfj",
          description: "awklejfhakwjefh"
        },
        {
          id: 2,
          title: "typing is boring",
          description: "yuppppp"
        }
      ],
      latestId: 3
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newTodo) {
    let newTodos = [
      {
        ...newTodo,
        id: this.state.latestId
      },
      ...this.state.todos
    ];
    this.setState({
      todos: newTodos,
      latestId: this.state.latestId + 1
    });
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo key={todo.id} title={todo.title} description={todo.description} />
    ));

    return (
      <div>
        <TodoForm addTodo={this.handleAdd} />
        {todos}
      </div>
    );
  }
}

export default TodoList;
