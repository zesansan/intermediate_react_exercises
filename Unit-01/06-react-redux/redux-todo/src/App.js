import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import { Route, Link, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="App-title">Welcome to To Do List</h1>
                <TodoList />
            </div>
        );
    }
}

export default App;
