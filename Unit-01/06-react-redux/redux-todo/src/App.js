import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListContainer from './TodoListContainer';
import {Route, Link, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My To Do List</h1>
          <Link to="/todos/new">new todo</Link><br/>
          <Link to="/todos">all Todos</Link>
        </header>
        <Switch>
          <Route path="/todos" component={TodoListContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
