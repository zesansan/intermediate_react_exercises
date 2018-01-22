import React, { Component } from 'react';

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state={
            id:props.todo ? props.todo.id : null,
            todoName: props.todo ? props.todo.task : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const { id , todoName } = this.state;
        this.setState({loading: true});
        this.props.saveTodo({ id, task });
    }

    render(){
    return(
        <form onSubmit={this.handleSubmit}>
            <div>
                <input 
                type="text" 
                name="title" 
                placeholder="add new todo" 
                onChange={this.handleChange}
                value={this.state.todoName}/>
                <button type="submit">submit</button>
            </div>
            <div>
                <button>Save</button>
            </div>    
        </form>
    )
} 
}

export default TodoForm;
